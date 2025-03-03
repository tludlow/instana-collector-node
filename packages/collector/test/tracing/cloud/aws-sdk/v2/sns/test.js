/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2021
 */

'use strict';

const { v4: uuid } = require('uuid');
const { cleanup, createTopic } = require('./util');
const semver = require('semver');
const path = require('path');
const { expect } = require('chai');
const { fail } = expect;
const constants = require('@tludlow-instana-fork/core').tracing.constants;
const supportedVersion = require('@tludlow-instana-fork/core').tracing.supportedVersion;
const config = require('@tludlow-instana-fork/core/test/config');
const { retry, stringifyItems, delay, expectExactlyOneMatching } = require('@tludlow-instana-fork/core/test/test_util');
const ProcessControls = require('../../../../../test_util/ProcessControls');
const globalAgent = require('../../../../../globalAgent');
const {
  verifyHttpRootEntry,
  verifyExitSpan,
  verifyHttpExit
} = require('@tludlow-instana-fork/core/test/test_util/common_verifications');
const { promisifyNonSequentialCases } = require('../promisify_non_sequential');

const topicAndQueueName = `nodejs-team-${semver.major(process.versions.node)}-${uuid()}`;
const topicArn = `arn:aws:sns:us-east-2:410797082306:${topicAndQueueName}`;
const sqsQueueUrl = `https://sqs.us-east-2.amazonaws.com/410797082306/${topicAndQueueName}`;

let mochaSuiteFn;

const withErrorOptions = [false, true];
const requestMethods = ['Callback', 'Promise', 'Async'];
const availableOperations = ['publish'];
const getNextCallMethod = require('@tludlow-instana-fork/core/test/test_util/circular_list').getCircularList(
  requestMethods
);

if (!supportedVersion(process.versions.node)) {
  mochaSuiteFn = describe.skip;
} else {
  mochaSuiteFn = describe;
}

const retryTime = config.getTestTimeout() * 2;

mochaSuiteFn('tracing/cloud/aws-sdk/v2/sns', function () {
  this.timeout(config.getTestTimeout() * 3);

  globalAgent.setUpCleanUpHooks();
  const agentControls = globalAgent.instance;

  before(async () => {
    await createTopic(topicAndQueueName);
  });

  after(async () => {
    await cleanup(topicArn, sqsQueueUrl);
  });

  describe('tracing enabled, no suppression', function () {
    const senderControls = new ProcessControls({
      dirname: __dirname,
      useGlobalAgent: true,
      env: {
        AWS_SNS_TOPIC_ARN: topicArn
      }
    });

    const receiverControls = new ProcessControls({
      appPath: path.join(__dirname, '../sqs/receiveMessage'),
      useGlobalAgent: true,
      env: {
        SQS_RECEIVE_METHOD: 'callback',
        AWS_SQS_QUEUE_URL: sqsQueueUrl
      }
    });

    ProcessControls.setUpHooksWithRetryTime(retryTime, senderControls, receiverControls);

    withErrorOptions.forEach(withError => {
      if (withError) {
        describe('getting result with error', () => {
          it(`should instrument ${availableOperations.join(', ')} with error`, () =>
            promisifyNonSequentialCases(verify, availableOperations, senderControls, withError, getNextCallMethod));
        });
      } else {
        describe('getting result without error', () => {
          availableOperations.forEach(operation => {
            const requestMethod = getNextCallMethod();
            it(`operation: ${operation}/${requestMethod}`, async () => {
              const withErrorOption = withError ? '?withError=1' : '';
              const apiPath = `/${operation}/${requestMethod}`;
              const response = await senderControls.sendRequest({
                method: 'GET',
                path: `${apiPath}${withErrorOption}`,
                simple: withError === false
              });
              return verify(senderControls, response, apiPath, operation, withError, receiverControls);
            });
          });
        });
      }
    });

    describe('message header limits', () => {
      it('creates spans but does not add correlation headers ', async () => {
        const operation = 'publish';
        const apiPath = `/${operation}/Async`;
        await senderControls.sendRequest({
          method: 'GET',
          path: `${apiPath}?addHeaders=9`
        });
        await retry(async () => {
          const spans = await agentControls.getSpans();
          const httpEntry = verifyHttpRootEntry({ spans, apiPath, pid: String(senderControls.getPid()) });
          verifyExitSpan({
            spanName: 'sns',
            spans,
            parent: httpEntry,
            withError: false,
            pid: String(senderControls.getPid()),
            extraTests: [span => expect(span.data.sns.topic).to.equal(topicArn)]
          });

          verifyHttpExit({ spans, parent: httpEntry, pid: String(senderControls.getPid()) });
          verifySQSEntrySpan(spans, String(receiverControls.getPid()), null);
        });
      });
    });

    async function verify(_senderControls, response, apiPath, operation, withError, _receiverControls) {
      const spans = await retry(async () => {
        const _spans = await agentControls.getSpans();
        const sqsEntrySpan = _spans.filter(span => span.n === 'sqs' && span.k === constants.ENTRY);

        if (withError || (sqsEntrySpan.length > 0 && !withError)) {
          return _spans;
        } else {
          throw new Error(`Expected an SQS entry span but did not receive one. All spans: ${stringifyItems(_spans)}`);
        }
      }, retryTime);
      verifySpans(_senderControls, spans, apiPath, operation, withError, _receiverControls);
    }

    function verifySpans(_senderControls, spans, apiPath, operation, withError, _receiverControls) {
      const httpEntry = verifyHttpRootEntry({ spans, apiPath, pid: String(_senderControls.getPid()) });
      const exitpSpan = verifyExitSpan({
        spanName: 'sns',
        spans,
        parent: httpEntry,
        withError,
        pid: String(_senderControls.getPid()),
        extraTests: [span => expect(span.data.sns.topic).to.equal(topicArn)]
      });

      if (!withError) {
        verifyHttpExit({ spans, parent: httpEntry, pid: String(_senderControls.getPid()) });
        verifySQSEntrySpan(spans, String(_receiverControls.getPid()), exitpSpan);
      }
    }

    function verifySQSEntrySpan(spans, receiverPid, parent) {
      expectExactlyOneMatching(spans, [
        span => expect(span.n).to.be.eq('sqs'),
        span => expect(span.k).to.be.eq(constants.ENTRY),
        span => expect(span.f.e).to.be.eq(receiverPid),
        span => (parent ? expect(span.t).to.be.eq(parent.t) : expect(span.t).to.be.a('string')),
        span => (parent ? expect(span.p).to.be.eq(parent.s) : expect(span.p).to.not.exist),
        span => expect(span.data.sqs.queue).to.be.eq(sqsQueueUrl)
      ]);
    }
  });

  describe('tracing disabled', () => {
    this.timeout(config.getTestTimeout() * 2);

    const appControls = new ProcessControls({
      appPath: path.join(__dirname, 'app'),
      useGlobalAgent: true,
      tracingEnabled: false,
      env: {
        AWS_SNS_TOPIC_ARN: topicArn
      }
    });

    ProcessControls.setUpHooksWithRetryTime(retryTime, appControls);

    describe('attempt to get result', () => {
      availableOperations.forEach(operation => {
        const requestMethod = getNextCallMethod();
        it(`should not trace (${operation}/${requestMethod})`, async () => {
          await appControls.sendRequest({
            method: 'GET',
            path: `/${operation}/${requestMethod}`
          });
          return retry(() => delay(config.getTestTimeout() / 4))
            .then(() => agentControls.getSpans())
            .then(spans => {
              if (spans.length > 0) {
                fail(`Unexpected spans (AWS SNS suppressed: ${stringifyItems(spans)}`);
              }
            });
        });
      });
    });
  });

  describe('tracing enabled but suppressed', () => {
    const appControls = new ProcessControls({
      appPath: path.join(__dirname, 'app'),
      useGlobalAgent: true,
      env: {
        AWS_SNS_TOPIC_ARN: topicArn
      }
    });

    ProcessControls.setUpHooksWithRetryTime(retryTime, appControls);

    describe('attempt to get result', () => {
      availableOperations.forEach(operation => {
        const requestMethod = getNextCallMethod();
        it(`should not trace (${operation}/${requestMethod})`, async () => {
          await appControls.sendRequest({
            suppressTracing: true,
            method: 'GET',
            path: `/${operation}/${requestMethod}`
          });

          return retry(() => delay(config.getTestTimeout() / 4), retryTime)
            .then(() => agentControls.getSpans())
            .then(spans => {
              if (spans.length > 0) {
                fail(`Unexpected spans (AWS SNS suppressed: ${stringifyItems(spans)}`);
              }
            });
        });
      });
    });
  });
});

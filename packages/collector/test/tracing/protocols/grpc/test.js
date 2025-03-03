/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2019
 */

'use strict';

const path = require('path');
const semver = require('semver');
const expect = require('chai').expect;

const { constants, supportedVersion } = require('@tludlow-instana-fork/core').tracing;
const config = require('../../../../../core/test/config');
const delay = require('../../../../../core/test/test_util/delay');
const { expectExactlyOneMatching, getSpansByName, retry } = require('../../../../../core/test/test_util');
const ProcessControls = require('../../../test_util/ProcessControls');
const globalAgent = require('../../../globalAgent');

const agentControls = globalAgent.instance;

const mochaSuiteFn =
  supportedVersion(process.versions.node) && semver.lt(process.versions.node, '18.0.0') ? describe : describe.skip;

mochaSuiteFn('tracing/grpc', function () {
  this.timeout(config.getTestTimeout());

  globalAgent.setUpCleanUpHooks();

  ['dynamic', 'static'].forEach(codeGenMode => {
    [false, true].forEach(withMetadata => {
      [false, true].forEach(function (withOptions) {
        registerSuite.bind(this)(codeGenMode, withMetadata, withOptions);
        registerCancelSuite.bind(this)(codeGenMode, withMetadata, withOptions);
      });
    });
  });
  // registerSuite.bind(this)('dynamic', false, false);

  describe('with mali@0.2x.0', () => {
    // mali@0.2x.0 was the last mali version based on the grpc package, more recent versions are based on @grpc/grpc-js,
    // which is why we test 0.2x.0 explicitly here.
    // https://github.com/malijs/mali/blob/v0.30.0/package.json
    const { serverControls, clientControls } = createProcessesForOptions('mali', false, false);

    it('must trace an unary call', () => {
      const expectedReply = 'received: request';
      return runTest('/unary-call', serverControls, clientControls, expectedReply);
    });
  });

  describe('suppressed', () => {
    const { clientControls } = createProcesses();
    it('should not trace when suppressed', () =>
      clientControls
        .sendRequest({
          method: 'POST',
          path: '/unary-call',
          headers: {
            'X-INSTANA-L': '0'
          }
        })
        .then(response => {
          expect(response.reply).to.equal('received: request');
          return delay(config.getTestTimeout() / 4);
        })
        .then(() =>
          agentControls.getSpans().then(spans => {
            expect(spans).to.have.lengthOf(0);
          })
        ));
  });

  describe('individually disabled', () => {
    const { clientControls } = createProcesses({
      INSTANA_DISABLED_TRACERS: 'GRPC'
    });

    it('should not trace when GRPC tracing is individually disabled', () =>
      clientControls
        .sendRequest({
          method: 'POST',
          path: '/unary-call'
        })
        .then(response => {
          expect(response.reply).to.equal('received: request');
          return retry(() =>
            agentControls.getSpans().then(spans => {
              expectExactlyOneMatching(spans, checkHttpEntry('/unary-call'));
              expect(getSpansByName(spans, 'rpc-client')).to.be.empty;
              expect(getSpansByName(spans, 'rpc-server')).to.be.empty;
            })
          );
        }));
  });
});

function registerSuite(codeGenMode, withMetadata, withOptions) {
  describe(`codegen: ${codeGenMode}, with metadata: ${withMetadata}, with options: ${withOptions}`, () => {
    const { serverControls, clientControls } = createProcessesForOptions(codeGenMode, withMetadata, withOptions);

    it('must trace an unary call', () => {
      const expectedReply = `received: request${withMetadata ? ' & test-content' : ''}`;
      return runTest('/unary-call', serverControls, clientControls, expectedReply);
    });

    it('must mark unary call as erroneous', () =>
      runTest('/unary-call', serverControls, clientControls, null, false, true));

    it('must trace server-side streaming', () => {
      const expectedReply = withMetadata
        ? ['received: request & test-content', 'streaming', 'more', 'data']
        : ['received: request', 'streaming', 'more', 'data'];
      return runTest('/server-stream', serverControls, clientControls, expectedReply);
    });

    it('must mark server-side streaming as erroneous', () =>
      runTest('/server-stream', serverControls, clientControls, null, false, true));

    it('must trace client-side streaming', () => {
      const expectedReply = 'first; second; third';
      return runTest('/client-stream', serverControls, clientControls, expectedReply);
    });

    it('must mark client-side streaming as erroneous', () =>
      runTest('/client-stream', serverControls, clientControls, null, false, true));

    it('must trace bidi streaming', () => {
      const expectedReply = withMetadata
        ? [
            'received: first & test-content',
            'received: second & test-content',
            'received: third & test-content',
            'STOP'
          ]
        : ['received: first', 'received: second', 'received: third', 'STOP'];
      return runTest('/bidi-stream', serverControls, clientControls, expectedReply);
    });

    it('must mark bidi streaming as erroneous', () =>
      runTest('/bidi-stream', serverControls, clientControls, null, false, true));
  });
}

function registerCancelSuite(codeGenMode, withMetadata, withOptions) {
  describe(`codegen: ${codeGenMode}, with metadata: ${withMetadata}, with options: ${withOptions}`, () => {
    const { serverControls, clientControls } = createProcessesForOptions(codeGenMode, withMetadata, withOptions);

    it('must cancel an unary call', () => runTest('/unary-call', serverControls, clientControls, null, true, false));

    it('must cancel server-side streaming', () =>
      runTest('/server-stream', serverControls, clientControls, null, true, false));

    it('must cancel client-side streaming', () =>
      runTest('/client-stream', serverControls, clientControls, null, true, false));

    it('must cancel bidi streaming', () => runTest('/bidi-stream', serverControls, clientControls, null, true, false));
  });
}

function createProcessesForOptions(codeGenMode, withMetadata, withOptions) {
  const env = {};
  if (codeGenMode === 'static') {
    env.GRPC_STATIC = true;
  }
  if (withMetadata) {
    env.GRPC_WITH_METADATA = true;
  }
  if (withOptions) {
    env.GRPC_WITH_OPTIONS = true;
  }

  const isMaliServer = codeGenMode === 'mali';
  return createProcesses(env, isMaliServer);
}

function createProcesses(env = {}, isMaliServer = false) {
  const serverControls = isMaliServer
    ? new ProcessControls({
        appPath: path.join(__dirname, 'maliServer'),
        useGlobalAgent: true,
        env
      })
    : new ProcessControls({
        appPath: path.join(__dirname, 'server'),
        useGlobalAgent: true,
        env
      });
  const clientControls = new ProcessControls({
    appPath: path.join(__dirname, 'client'),
    useGlobalAgent: true,
    env
  });
  ProcessControls.setUpHooks(serverControls, clientControls);
  return { serverControls, clientControls };
}

function runTest(url, serverControls, clientControls, expectedReply, cancel, erroneous) {
  return clientControls
    .sendRequest({
      method: 'POST',
      path: url + createQueryParams(cancel, erroneous)
    })
    .then(response => {
      if (!erroneous && !cancel) {
        expect(response.reply).to.deep.equal(expectedReply);
      }
      return waitForTrace(serverControls, clientControls, url, cancel, erroneous);
    });
}

function createQueryParams(cancel, erroneous) {
  if (erroneous) {
    return '?error=true';
  } else if (cancel) {
    return '?cancel=true';
  } else {
    return '';
  }
}

function waitForTrace(serverControls, clientControls, url, cancel, erroneous) {
  return retry(() =>
    agentControls.getSpans().then(spans => {
      checkTrace(serverControls, clientControls, spans, url, cancel, erroneous);
    })
  );
}

function checkTrace(serverControls, clientControls, spans, url, cancel, erroneous) {
  const httpEntry = expectExactlyOneMatching(spans, checkHttpEntry(url));
  const grpcExit = expectExactlyOneMatching(
    spans,
    checkGrpcClientSpan(httpEntry, clientControls, url, cancel, erroneous)
  );
  // Except for server-streaming and bidi-streaming, we cancel the call immediately on the client, so it usually never
  // reaches the server (depends on the timing). Therefore we also do not expect any GRPC server spans to exist. For
  // server-streaming and bidi-streaming we have a communcation channel from the server to the client so that the
  // server can signal to the client when to cancel the call after it has already reached the server, such a channel
  // does not exist for unary call and client side streaming.
  if (!cancel || url === '/server-stream' || url === '/bidi-stream') {
    const grpcEntry = expectExactlyOneMatching(
      spans,
      checkGrpcServerSpan(grpcExit, serverControls, url, cancel, erroneous)
    );
    expectExactlyOneMatching(spans, checkLogSpanDuringGrpcEntry(grpcEntry, url, erroneous));
  }
  // Would be nice to also check for the log span from the interceptor but will actually never be created because at
  // that time, the parent span is an exit span (the GRPC exit). If only log spans were intermediate spans :-)
  // expectExactlyOneMatching(spans, checkLogSpanFromClientInterceptor.bind(null, httpEntry));
  expectExactlyOneMatching(spans, checkLogSpanAfterGrpcExit(httpEntry, url, cancel, erroneous));
}

function checkHttpEntry(url) {
  return [
    span => expect(span.n).to.equal('node.http.server'),
    span => expect(span.k).to.equal(constants.ENTRY),
    span => expect(span.data.http.url).to.equal(url)
  ];
}

function checkGrpcClientSpan(httpEntry, clientControls, url, cancel, erroneous) {
  let expectations = [
    span => expect(span.n).to.equal('rpc-client'),
    span => expect(span.k).to.equal(constants.EXIT),
    span => expect(span.t).to.equal(httpEntry.t),
    span => expect(span.p).to.equal(httpEntry.s),
    span => expect(span.s).to.be.not.empty,
    span => expect(span.f.e).to.equal(String(clientControls.getPid())),
    span => expect(span.data.rpc).to.exist,
    span => expect(span.data.rpc.flavor).to.equal('grpc'),
    span => expect(span.data.rpc.call).to.equal(rpcCallNameForUrl(url)),
    span => expect(span.data.rpc.host).to.equal('localhost'),
    span => expect(span.data.rpc.port).to.equal('50051')
  ];
  if (erroneous) {
    expectations = expectations.concat([
      span => expect(span.ec).to.be.equal(1),
      span => expect(span.error).to.not.exist,
      span => expect(span.data.rpc.error).to.equal('Boom!')
    ]);
  } else {
    expectations = expectations.concat([
      span => expect(span.ec).to.be.equal(0),
      span => expect(span.error).to.not.exist,
      span => expect(span.data.rpc.error).to.not.exist
    ]);
  }
  return expectations;
}

function checkGrpcServerSpan(grpcExit, serverControls, url, cancel, erroneous) {
  let expectations = [
    span => expect(span.n).to.equal('rpc-server'),
    span => expect(span.k).to.equal(constants.ENTRY),
    span => expect(span.t).to.equal(grpcExit.t),
    span => expect(span.p).to.equal(grpcExit.s),
    span => expect(span.s).to.be.not.empty,
    span => expect(span.f.e).to.equal(String(serverControls.getPid())),
    span => expect(span.data.rpc).to.exist,
    span => expect(span.data.rpc.flavor).to.equal('grpc'),
    span => expect(span.data.rpc.call).to.equal(rpcCallNameForUrl(url))
  ];
  if (erroneous) {
    expectations = expectations.concat([
      span => expect(span.ec).to.be.equal(1),
      span => expect(span.error).to.not.exist,
      span => expect(span.data.rpc.error).to.equal('Boom!')
    ]);
  } else {
    expectations = expectations.concat([
      span => expect(span.ec).to.be.equal(0),
      span => expect(span.error).to.not.exist,
      span => expect(span.data.rpc.error).to.not.exist
    ]);
  }
  return expectations;
}

function checkLogSpanAfterGrpcExit(httpEntry, url, cancel, erroneous) {
  const expectations = [
    span => expect(span.n).to.equal('log.pino'),
    span => expect(span.k).to.equal(constants.EXIT),
    span => expect(span.t).to.equal(httpEntry.t),
    span => expect(span.p).to.equal(httpEntry.s)
  ];
  if (erroneous) {
    expectations.push(span => expect(span.data.log.message).to.contain('Boom!'));
  } else if (cancel && url !== '/bidi-stream') {
    expectations.push(span => expect(span.data.log.message).to.contain('Cancelled'));
  } else {
    expectations.push(span => expect(span.data.log.message).to.equal(url));
  }
  return expectations;
}

function checkLogSpanDuringGrpcEntry(grpcEntry, url, erroneous) {
  const expectations = [
    span => expect(span.n).to.equal('log.pino'),
    span => expect(span.k).to.equal(constants.EXIT),
    span => expect(span.t).to.equal(grpcEntry.t),
    span => expect(span.p).to.equal(grpcEntry.s)
  ];
  if (erroneous) {
    expectations.push(span => expect(span.data.log.message).to.contain('Boom!'));
  } else {
    expectations.push(span => expect(span.data.log.message).to.equal(url));
  }
  return expectations;
}

function rpcCallNameForUrl(url) {
  switch (url) {
    case '/unary-call':
      return 'instana.node.grpc.test.TestService/MakeUnaryCall';
    case '/server-stream':
      return 'instana.node.grpc.test.TestService/StartServerSideStreaming';
    case '/client-stream':
      return 'instana.node.grpc.test.TestService/StartClientSideStreaming';
    case '/bidi-stream':
      return 'instana.node.grpc.test.TestService/StartBidiStreaming';
    default:
      throw new Error(`Unknown URL: ${url}`);
  }
}

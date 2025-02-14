/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2019
 */

'use strict';

const {
  expect,
  assert: { fail }
} = require('chai');

const constants = require('@tludlow-instana-fork/core').tracing.constants;
const supportedVersion = require('@tludlow-instana-fork/core').tracing.supportedVersion;
const config = require('../../../../../core/test/config');
const testUtils = require('../../../../../core/test/test_util');
const ProcessControls = require('../../../test_util/ProcessControls');
const globalAgent = require('../../../globalAgent');

const agentControls = globalAgent.instance;

const mochaSuiteFn = supportedVersion(process.versions.node) ? describe : describe.skip;

mochaSuiteFn('tracing/too late', function () {
  this.timeout(config.getTestTimeout());
  globalAgent.setUpCleanUpHooks();

  const EXAMPLE_MODULE = 'mysql';

  describe(`@tludlow-instana-fork/collector is initialized too late (choosing ${EXAMPLE_MODULE} as an example)`, function () {
    const controls = new ProcessControls({
      dirname: __dirname,
      useGlobalAgent: true,
      env: {
        REQUIRE_BEFORE_COLLECTOR: EXAMPLE_MODULE
      }
    }).registerTestHooks();

    it(`should warn when module ${EXAMPLE_MODULE} has been require before @tludlow-instana-fork/collector`, () =>
      controls
        .sendRequest({
          path: '/'
        })
        .then(() =>
          testUtils.retry(() =>
            Promise.all([
              agentControls.getSpans(),
              agentControls.getMonitoringEvents(),
              agentControls.getAllMetrics(controls.getPid())
            ]).then(([spans, monitoringEvents, metrics]) => {
              // expect HTTP entry to be captured
              testUtils.expectAtLeastOneMatching(spans, [
                span => expect(span.n).to.equal('node.http.server'),
                span => expect(span.k).to.equal(constants.ENTRY),
                span => expect(span.async).to.not.exist,
                span => expect(span.error).to.not.exist,
                span => expect(span.ec).to.equal(0),
                span => expect(span.p).to.not.exist,
                span => expect(span.data.http.method).to.equal('GET'),
                span => expect(span.data.http.url).to.equal('/')
              ]);

              // expect HTTP exit to not be captured
              const httpExits = testUtils.getSpansByName(spans, 'node.http.client');
              expect(httpExits).to.have.lengthOf(0);

              // expect the initialized-too-late monitoring event to have been fired
              expect(monitoringEvents).to.deep.include(
                {
                  plugin: 'com.instana.forge.infrastructure.runtime.nodejs.NodeJsRuntimePlatform',
                  pid: controls.getPid(),
                  code: 'nodejs_collector_initialized_too_late',
                  duration: 660000,
                  category: 'TRACER'
                },
                JSON.stringify(monitoringEvents)
              );

              // expect initTooLate to have been recorded via snapshot data too (until that mechanism is removed)
              let initTooLateFound = false;
              metrics.forEach(m => {
                if (m && m.data) {
                  if (m.data.initTooLate === true) {
                    initTooLateFound = true;
                  } else if (m.data.initTooLate !== undefined) {
                    fail(
                      `Found invalid value (${m.data.initTooLate}, type: ${typeof m.data
                        .initTooLate}) for initTooLate metric, should be either undefined or true.`
                    );
                  }
                }
              });
              expect(initTooLateFound).to.be.true;
            })
          )
        ));
  });

  describe('@tludlow-instana-fork/collector is initialized properly', () => {
    const controls = new ProcessControls({
      dirname: __dirname,
      useGlobalAgent: true
    }).registerTestHooks();

    it('should not warn about being initialized too late', () =>
      controls
        .sendRequest({
          path: '/'
        })
        .then(() =>
          testUtils.retry(() =>
            Promise.all([
              agentControls.getSpans(),
              agentControls.getMonitoringEvents(),
              agentControls.getAllMetrics(controls.getPid())
            ]).then(([spans, monitoringEvents, metrics]) => {
              const httpEntry = testUtils.expectAtLeastOneMatching(spans, [
                span => expect(span.n).to.equal('node.http.server'),
                span => expect(span.k).to.equal(constants.ENTRY),
                span => expect(span.p).to.not.exist,
                span => expect(span.data.http.method).to.equal('GET'),
                span => expect(span.data.http.url).to.equal('/')
              ]);

              // expect HTTP exit to have been captured
              testUtils.expectAtLeastOneMatching(spans, [
                span => expect(span.n).to.equal('node.http.client'),
                span => expect(span.k).to.equal(constants.EXIT),
                span => expect(span.p).to.equal(httpEntry.s),
                span => expect(span.data.http.method).to.equal('GET'),
                span => expect(span.data.http.url).to.match(/http:\/\/127\.0\.0\.1:[0-9]+/)
              ]);

              // expect initTooLate monitoring event to NOT have been fired
              expect(monitoringEvents).to.be.empty;

              // expect initTooLate to NOT have been recorded in the snapshot data
              let initTooLateFound = false;
              metrics.forEach(m => {
                if (m && m.data) {
                  if (m.data.initTooLate === true) {
                    initTooLateFound = true;
                  } else if (m.data.initTooLate !== undefined) {
                    fail(
                      `Found invalid value (${m.data.initTooLate}, type: ${typeof m.data
                        .initTooLate}) for initTooLate metric, should be either undefined or true.`
                    );
                  }
                }
              });
              expect(initTooLateFound).to.be.false;
            })
          )
        ));
  });
});

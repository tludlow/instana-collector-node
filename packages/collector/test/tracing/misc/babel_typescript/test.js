/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2019
 */

'use strict';

const { expect } = require('chai');
const path = require('path');
const rimraf = require('rimraf');

const constants = require('@tludlow-instana-fork/core').tracing.constants;
const supportedVersion = require('@tludlow-instana-fork/core').tracing.supportedVersion;
const config = require('../../../../../core/test/config');
const testUtils = require('../../../../../core/test/test_util');
const ProcessControls = require('../../../test_util/ProcessControls');
const globalAgent = require('../../../globalAgent');
const { executeCallback } = require('../../../test_util/executeCommand');

const babelAppDir = path.join(__dirname, '../../../apps/babel-typescript');
const babelLibDir = path.join(babelAppDir, 'lib');
const agentControls = globalAgent.instance;

const mochaSuiteFn = supportedVersion(process.versions.node) ? describe : describe.skip;

mochaSuiteFn('tracing a babel/typescript setup', function () {
  this.timeout(Math.max(config.getTestTimeout() * 3, 20000));

  globalAgent.setUpCleanUpHooks();

  before(done => {
    rimraf(babelLibDir, err => {
      if (err) {
        return done(err);
      }
      // If this fails with "Error: Cannot find module './testUtils'" there might be left over node_modules installed by
      // a different Node.js version. rm -rf packages/collector/test/apps/babel-typescript/node_modules and run again.

      // We use --no-optional to make npm install a bit faster. Compiling native add-ons (gcstats.js and friends)
      // might take longer than the the timeout on CI, and they are not relevant for this test suite.
      executeCallback('npm install --no-optional && npm run build', babelAppDir, done);
    });
  });

  after(done => {
    rimraf(babelLibDir, done);
  });

  this.timeout(config.getTestTimeout());

  const controls = new ProcessControls({
    appPath: path.join(__dirname, '../../../apps/babel-typescript'),
    useGlobalAgent: true,
    env: {
      INSTANA_COPY_PRECOMPILED_NATIVE_ADDONS: false
    }
  });
  ProcessControls.setUpHooks(controls);

  describe('@tludlow-instana-fork/collector used in a babel-transpiled typescript app', function () {
    it('should trace when imported with workaround according to our docs', () =>
      controls
        .sendRequest({
          path: '/'
        })
        .then(() =>
          testUtils.retry(() =>
            agentControls.getSpans().then(spans => {
              testUtils.expectAtLeastOneMatching(spans, [
                span => expect(span.n).to.equal('node.http.server'),
                span => expect(span.k).to.equal(constants.ENTRY),
                span => expect(span.p).to.not.exist,
                span => expect(span.data.http.method).to.equal('GET'),
                span => expect(span.data.http.url).to.equal('/')
              ]);
            })
          )
        ));
  });
});

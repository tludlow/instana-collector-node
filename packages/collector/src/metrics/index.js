/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2019
 */

'use strict';

const coreMetrics = require('@tludlow-instana-fork/core').metrics;
const sharedMetrics = require('@tludlow-instana-fork/shared-metrics');
const transmissionCycle = require('./transmissionCycle');

coreMetrics.registerAdditionalMetrics(sharedMetrics.allMetrics);
const additionalCollectorMetrics = coreMetrics.findAndRequire(__dirname);
coreMetrics.registerAdditionalMetrics(additionalCollectorMetrics);

/** @type {import('@tludlow-instana-fork/core/src/logger').GenericLogger} */
const logger = require('../logger').getLogger('metrics', newLogger => {
  coreMetrics.setLogger(newLogger);
});
coreMetrics.setLogger(logger);

/**
 * @param {import('@tludlow-instana-fork/core/src/metrics').InstanaConfig} config
 */
exports.init = function init(config) {
  coreMetrics.init(config);
  transmissionCycle.init(config);
};

exports.activate = function activate() {
  coreMetrics.activate();
};

exports.deactivate = function deactivate() {
  coreMetrics.deactivate();
};

exports.gatherData = function gatherData() {
  return coreMetrics.gatherData();
};

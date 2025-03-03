/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2020
 */

'use strict';

const { applicationUnderMonitoring } = require('@tludlow-instana-fork/core').util;

let logger = require('@tludlow-instana-fork/core').logger.getLogger('metrics');
/**
 * @param {import('@tludlow-instana-fork/core/src/logger').GenericLogger} _logger
 */
exports.setLogger = function setLogger(_logger) {
  logger = _logger;
};

exports.payloadPrefix = 'version';
// @ts-ignore
exports.currentPayload = undefined;

const MAX_ATTEMPTS = 20;
const DELAY = 1000;
let attempts = 0;

exports.activate = function activate() {
  attempts++;
  applicationUnderMonitoring.getMainPackageJsonStartingAtMainModule((err, packageJson) => {
    if (err) {
      return logger.warn('Failed to determine main package json. Reason: ', err.message, err.stack);
    } else if (!packageJson && attempts < MAX_ATTEMPTS) {
      setTimeout(exports.activate, DELAY).unref();
      return;
    } else if (!packageJson) {
      // final attempt failed, ignore silently
      return;
    }

    // @ts-ignore
    exports.currentPayload = packageJson.version;
  });
};

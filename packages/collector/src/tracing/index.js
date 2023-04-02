/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2020
 */

'use strict';

require('@tludlow-instana-fork/core').registerAdditionalInstrumentations([
  require('./instrumentation/process/edgemicro'),
  require('./instrumentation/process/childProcess')
]);

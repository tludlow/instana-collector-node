/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2021
 */

'use strict';

// This application is deliberately not instrumented manually with require('@tludlow-instana-fork/collector'), it is meant to be used
// with NODE_OPTIONS="--require ...".

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = require('../test_util/app-port')();

const logPrefix = `Auto Attach (${process.pid}):\t`;

if (process.env.WITH_STDOUT) {
  app.use(morgan(`${logPrefix}:method :url :status`));
}

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/pid', (req, res) => {
  res.send(String(process.pid));
});

app.listen(port, () => {
  log(`Listening on port: ${port}`);
});

function log() {
  const args = Array.prototype.slice.call(arguments);
  args[0] = `${logPrefix} (${process.pid}):\t${args[0]}`;
  // eslint-disable-next-line no-console
  console.log.apply(console, args);
}

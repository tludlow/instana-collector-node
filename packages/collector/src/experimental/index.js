/*
 * (c) Copyright IBM Corp. 2021
 * (c) Copyright Instana Inc. and contributors 2020
 */

'use strict';

const instanaNodeJsCore = require('@tludlow-instana-fork/core');

exports.instrument = instanaNodeJsCore.tracing._instrument;

'use strict';

exports.payloadType = 'runtime';
exports.payloadPrefix = 'activeHandles';

exports.activate = function() {};
exports.deactivate = function() {};

Object.defineProperty(exports, 'currentPayload', {
  get: function() {
    return process._getActiveHandles().length;
  }
});

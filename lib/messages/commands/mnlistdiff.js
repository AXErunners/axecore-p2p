'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var axecore = require('@axerunners/axecore-lib');
var $ = axecore.util.preconditions;
var _ = axecore.deps._;

/**
 * Contains information about a MnListDiff
 * @param {MnListDiff} arg - An instance of MnListDiff
 * @param {Object=} options
 * @param {Function} options.MnListDiff - a MnListDiff constructor
 * @extends Message
 * @constructor
 */
function MnListDiffMessage(arg, options) {
  Message.call(this, options);
  this.MnListDiff = options.MnListDiff;
  this.command = 'mnlistdiff';
  $.checkArgument(
    _.isUndefined(arg) || arg instanceof this.MnListDiff,
    'An instance of MnListDiff or undefined is expected'
  );
  this.mnlistdiff = arg;
}
inherits(MnListDiffMessage, Message);

MnListDiffMessage.prototype.setPayload = function (payload) {
  this.MnListDiff = Buffer.from(payload, 'hex');
};

MnListDiffMessage.prototype.getPayload = function () {
  return Buffer.from(this.MnListDiff, 'hex');
};

module.exports = MnListDiffMessage;

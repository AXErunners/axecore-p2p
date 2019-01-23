'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var axecore = require('@axerunners/axecore-lib');
var $ = axecore.util.preconditions;
var _ = axecore.deps._;

/**
 * @param {Transaction=} arg - An instance of Transaction
 * @param {Object} options
 * @extends Message
 * @constructor
 */
function TXLockRequest(arg, options) {
    Message.call(this, options);
    this.command = 'ix';
    this.Transaction = options.Transaction;
    $.checkArgument(
        _.isUndefined(arg) || arg instanceof this.Transaction,
        'An instance of Transaction or undefined is expected'
    );
    this.transaction = arg;
    if (!this.transaction) {
        this.transaction = new this.Transaction();
    }
}
inherits(TXLockRequest, Message);

TXLockRequest.prototype.setPayload = function(payload) {
    if (this.Transaction.prototype.fromBuffer) {
        this.transaction = new this.Transaction().fromBuffer(payload);
    } else {
        this.transaction = this.Transaction.fromBuffer(payload);
    }
};

TXLockRequest.prototype.getPayload = function() {
    return this.transaction.toBuffer();
};

module.exports = TXLockRequest;

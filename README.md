Bitcore P2P-AXE
=======

[![NPM Package](https://img.shields.io/npm/v/bitcore-p2p-axe.svg)](https://www.npmjs.org/package/bitcore-p2p-axe)
[![Build Status](https://travis-ci.org/AXErunners/bitcore-p2p-axe.svg?branch=master)](https://travis-ci.com/AXErunners/bitcore-p2p-axe)
[![Coverage Status](https://img.shields.io/coveralls/AXErunners/bitcore-p2p-axe.svg)](https://coveralls.io/r/AXErunners/bitcore-p2p-axe?branch=master)

`bitcore-p2p-axe` adds AXE protocol support for Bitcore-AXE.

See [the main bitcore-axe repo](https://github.com/axerunners/bitcore-axe) for more information.

## Getting Started

```sh
npm install bitcore-p2p-axe
```
In order to connect to the AXE network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('bitcore-p2p-axe').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/axerunners/bitcore-axe/blob/master/CONTRIBUTING.md) on the main bitcore-axe repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

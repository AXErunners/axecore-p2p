Bitcore P2P-AXE
=======

[![NPM Package](https://img.shields.io/npm/v/axecore-p2p.svg)](https://www.npmjs.org/package/axecore-p2p)
[![Build Status](https://travis-ci.org/AXErunners/axecore-p2p.svg?branch=master)](https://travis-ci.com/AXErunners/axecore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/AXErunners/axecore-p2p.svg)](https://coveralls.io/r/AXErunners/axecore-p2p?branch=master)

`axecore-p2p` adds AXE protocol support for Bitcore-AXE.

See [the main bitcore-axe repo](https://github.com/axerunners/bitcore-axe) for more information.

## Getting Started

```sh
npm install axecore-p2p
```
In order to connect to the AXE network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('axecore-p2p').Peer;

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

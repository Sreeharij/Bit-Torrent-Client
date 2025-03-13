'use strict';

const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');

const torrent = torrentParser.open('./linkinpark.torrent');
// const torrent = torrentParser.open('ubuntu-24.04.1-live-server-amd64.iso.torrent');

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});
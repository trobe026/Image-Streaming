'use strict';

var redis = require('redis'),
// port 6379
client = redis.createClient();

client.on('error', function(error) {
  throw error;
});

module.exports = client;

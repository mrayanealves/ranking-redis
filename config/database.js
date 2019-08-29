var redis = require('redis');
var redis = redis.createClient();

redis.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

module.exports = redis
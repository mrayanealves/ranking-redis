var redis = require('../config/database');

exports.findAllRanking = function(sortset, callback){
    redis.zrange(sortset, 0, -1, 'withscores', (err, data) => {
        callback(err, data)
    });
}
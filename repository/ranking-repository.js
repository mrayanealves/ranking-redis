var redis = require('../config/database');

// The method redis.zrange return all records of sorted set in a range determinad

/**
 * This method return all records of sorted set
 */
exports.findAllRanking = function(sortset, callback){
    redis.zrange(sortset, 0, -1, 'withscores', (err, data) => {
        callback(err, data)
    });
}

/**
 * This method return the firts ten records of sorted set
 */
exports.findTopRanking = function(sortset, callback){
    redis.zrange(sortset, 0, 9, 'withscores', (err, data) => {
        callback(err, data)
    });
}
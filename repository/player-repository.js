var redis = require('../config/database');

// The method redis.zaad adds a new register in the sorted set

/**
 * This method saves a new record in the sorted set with score equals zero
 */
exports.saveNewPlayer = function(sortser, userscore, username, callback){
    redis.zadd(sortser, userscore, username, (err, reply) => {
        callback(err)
    });
}

// The method redis.zincrby increments a value in the score of an existing record.

/**
 * This method increments a value in the score of an existing record.
 */
exports.updateScorePlayer = function(sortset, incrementscore, username, callback){
    redis.zincrby(sortset, incrementscore, username, (err, data) => {
        callback(err, data)
    });
}

// The method redis.zscore return the score value of a record

/**
 * This method return the value score value of an existing record.
 */
exports.findScoreUsername = function(sortset, username, callback){
    redis.zscore(sortset, username, (err, data) => {
        callback(err, data)
    });
}
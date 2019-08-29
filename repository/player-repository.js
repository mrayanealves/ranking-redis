var redis = require('../config/database');

exports.saveNewPlayer = function(sortser, userscore, username, callback){
    redis.zadd(sortser, userscore, username, (err, reply) => {
        callback(err)
    });
}

exports.updateScorePlayer = function(sortset, incrementscore, username, callback){
    redis.zincrby(sortset, incrementscore, username, (err) => {
        callback(err)
    });
}

exports.findScoreUsername = function(sortset, username, callback){
    redis.zscore(sortset, username, (err, data) => {
        return callback(err, data)
    });

    
}
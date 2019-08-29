var redis = require('../config/database');

exports.saveNewPlayer = function(sortser, userscore, username, callback){
    redis.zadd(sortser, userscore, username, (err, reply) => {
        callback(err)
    });
}

exports.updateScorePlayer = function(sortset, incrementscore, username, callback){
    redis.zincrby(sortset, incrementscore, username, (err, reply) => {
        callback(err)
    });
}
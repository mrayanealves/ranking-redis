var repository = require('../repository/player-repository')

/**
 * This method saves a new player
 */
exports.saveNewPlayer = (req, res) => {
    sortset = 'ranking:player';

    score = 0
    username = req.body.username;

    if(!username){
        res.status(400).jsonp({error: 'Enter a username'});
    } 

    repository.saveNewPlayer(sortset, score, username, (err) => {
        if(err){
            res.status(500);
        } 

        res.status(200).jsonp({'username': username, 
                               'score': score});   
    });
}

/**
 * This method adds a value to a player's score
 */
exports.updateScorePlayer = (req, res) => {
    sortset = 'ranking:player';

    score = req.body.score;
    username = req.body.username;

    if(!username){
        res.status(400).jsonp({error: 'Enter a username'});
    } 
    else if(!score){
        res.status(400).jsonp({error: 'Enter a number of score to add'});
    }

    repository.updateScorePlayer(sortset, score, username, (err) => {
        if(err){
            res.status(500);
        }

        repository.findScoreUsername(sortset, username, (err, data) => {
            if(err){
                res.status(500)
            } else {
                score = data

                res.status(200).jsonp({'username': username, 
                               'score': parseInt(score, 10)}); 
            }
        })
    });
}

/**
 * This method removes a value to a player's score
 */
exports.removeScorePlayer = (req, res) => {
    sortset = 'ranking:player';

    score = req.body.score * -1;
    username = req.body.username;

    if(!username){
        res.status(400).jsonp({error: 'Enter a username'});
    } 
    else if(!score){
        res.status(400).jsonp({error: 'Enter a number of score to add'});
    }

    repository.updateScorePlayer(sortset, score, username, (err) => {
        if(err){
            res.status(500);
        }

        repository.findScoreUsername(sortset, username, (err, data) => {
            if(err){
                res.status(500)
            } else {
                score = data

                res.status(200).jsonp({'username': username, 
                               'score': parseInt(score, 10)}); 
            }
        })
    });
}
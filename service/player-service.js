var repository = require('../repository/player-repository')

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
                               'score': userscore});   
    });
}
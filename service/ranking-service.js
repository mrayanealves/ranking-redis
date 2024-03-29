var repository = require('../repository/ranking-repository')

/**
 * This method return all players of ranking
 */
exports.findAllRanking = (req, res) => {
    sortset = 'ranking:player';

    repository.findAllRanking(sortset, (err, data) => {
        if(err) {
            res.status(500);
        } else {
            result = data;
            ranking = [];

            numberofranking = 1;
            numberofreturns = result.length-1

            for(var i = numberofreturns; i > 0; i-=2){
                ranking[numberofranking-1] = {
                    "position" : numberofranking,
                    "player": result[i-1],
                    "score": result[i]
                }
                numberofranking += 1
            }

            res.status(200).jsonp(ranking);
        }
    });
}

/**
 * This method return the firts ten players of ranking
 */
exports.findTopRanking = (req, res) => {
    sortset = 'ranking:player';

    repository.findTopRanking(sortset, (err, data) => {
        if(err) {
            res.status(500);
        } else {
            result = data;
            ranking = [];

            numberofranking = 1;
            numberofreturns = result.length-1

            for(var i = numberofreturns; i > 0; i-=2){
                ranking[numberofranking-1] = {
                    "position" : numberofranking,
                    "player": result[i-1],
                    "score": result[i]
                }
                numberofranking += 1
            }

            res.status(200).jsonp(ranking);
        }
    });
}

/**
 * This method return the last player in the ranking
 */
exports.findLastPlayerOfRanking = (req, res) => {
    sortset = 'ranking:player';

    repository.findTopRanking(sortset, (err, data) => {
        if(err) {
            res.status(500);
        } else {
            result = data;

            numberofranking = result.length/2;

            lastplayerofranking = {
                "position" : numberofranking,
                "player": result[0],
                "score": result[1]
            }

            res.status(200).jsonp(lastplayerofranking);
        }
    });
}
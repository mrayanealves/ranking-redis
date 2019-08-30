var repository = require('../repository/ranking-repository')

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
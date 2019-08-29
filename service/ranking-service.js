var repository = require('../repository/ranking-repository')

exports.findAllRanking = (req, res) => {
    sortset = 'ranking:player';

    repository.findAllRanking(sortset, (err, data) => {
        if(err) {
            res.status(500);
        } else {
            result = data;
            json = JSON.parse(data);

            res.status(200).json(json);
        }
    });
}
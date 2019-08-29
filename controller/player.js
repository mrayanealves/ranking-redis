const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var service = require('../service/player-service')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// router.get('/', function(req, res) {

// });

/**
 *  Saves a new player with score equals 0
 */
router.post('/', service.saveNewPlayer);

// router.put('/', );

// router.post('/add/points', function(req, res) {

// });

// router.post('/remove/points', function(req, res) {

// });

module.exports = router
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var service = require('../service/player-service')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

/**
 *  Saves a new player with score equals 0
 */
router.post('/', service.saveNewPlayer);

/**
 * Adds a value to a player's scores 
 */
router.post('/add/scores', service.updateScorePlayer);

/**
 * Removes a value to a player's scores 
 */
router.post('/remove/scores', service.removeScorePlayer);

module.exports = router
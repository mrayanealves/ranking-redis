const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var service = require('../service/ranking-service')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

/**
 *  Returns all ranking
 */
// router.get('/', service.);

/**
 * Returns top 10 of ranking
 */
// router.get('/tops', service.);

/**
 * Returns the last player of ranking
 */
// router.get('/players/last', service.);

module.exports = router
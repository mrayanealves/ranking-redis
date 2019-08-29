const express = require('express')
const app = express()
const port = 3000

var index = require('./controller/index')
var playing = require('./controller/player');
var ranking = require('./controller/ranking')

app.listen(port, () => console.log(`Example app listening on port $
{port}!`))

app.use('/', index)

app.use('/player', playing)

app.use('/ranking', ranking)
const express = require('express')
const app = express()
const port = 3000

var index = require('./index')

app.listen(port, () => console.log(`Example app listening on port $
{port}!`))

app.use('/', index)
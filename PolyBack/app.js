const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

var bodyParser = require('body-parser')
app.use( bodyParser.json() );

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send({})
})
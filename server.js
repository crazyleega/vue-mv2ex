const express = require('express')
const path = require('path')
const axios = require('axios')
const history = require('connect-history-api-fallback')
const proxyList = require('./config/proxy')
const app = express()
let apiRoutes = express.Router()

for (let i in proxyList) {
  app.get(i, function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    axios.get(proxyList[i], {
      headers: {},
      params: req.query
    }).then(response => {
      res.json(response.data)
    }).catch(e => {
      console.log(e)
    })
  })
}

app.use(history())
app.use('/', apiRoutes)
app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 7070
app.listen(port)
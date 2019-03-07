/**
 * server module
 * @module server
 */

// import db connection
const db = require('./db')

// import server framework
const express = require('express')
const server = express()

// process url-encoded request data
const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: true }))

// import routes
require('../routes/main.route')(server, db)

// define port
const port = 8080

// start server
server.listen(port, () => {
  console.log(`listening on port ${port}`)
})

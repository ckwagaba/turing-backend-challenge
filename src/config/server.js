/**
 * server module
 * @module server
 */

// import db connection
const db = require('./db')

// import web framework
const express = require('express')

// use framework for our app
const app = express()

// process data sent via the request body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// import routes
require('../routes/main.route')(app, db)

// define port
const port = 8080

// start server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

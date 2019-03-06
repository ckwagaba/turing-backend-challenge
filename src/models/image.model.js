/**
 * Image model
 * @module image.model
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const imageSchema = new mongoose.Schema({
  url: String
})

// export model
module.exports = mongoose.model('Image', imageSchema)

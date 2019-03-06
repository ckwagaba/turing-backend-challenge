/**
 * Attribute model
 * @module attribute.model
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const attributeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: String
})

// export model
module.exports = mongoose.model('Attribute', attributeSchema)

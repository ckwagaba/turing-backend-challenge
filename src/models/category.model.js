/**
 * Category model
 * @module category.model
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
})

// export model
module.exports = mongoose.model('Category', categorySchema)

/**
 * define category model
 * @module category
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const categorySchema = new mongoose.Schema({
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  name: {
    type: String,
    required: true
  },
  description: String
})

// export model
module.exports = mongoose.model('Category', categorySchema)

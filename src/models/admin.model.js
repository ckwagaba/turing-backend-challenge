/**
 * Admin model
 * @module admin.model
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: String
})

// export model
module.exports = mongoose.model('Admin', adminSchema)

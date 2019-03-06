/**
 * Customer model
 * @module customer.model
 */

// import data modeling library
const mongoose = require('mongoose')

// define schema
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  phone: String,
  country: String
})

// export model
module.exports = mongoose.model('Customer', customerSchema)

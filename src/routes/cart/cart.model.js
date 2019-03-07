/**
 * Cart model
 * @module cart.model
 */

// import data modeling library
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// define schema
const cartSchema = new mongoose.Schema({
  customer: { type: ObjectId, ref: 'Customer' },
  products: [{
    type: ObjectId,
    ref: 'Product',
    quantity: Number
  }]
})

// export model
module.exports = mongoose.model('Cart', cartSchema)

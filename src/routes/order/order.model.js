/**
 * Order model
 * @module order.model
 */

// import data modeling library
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// define schema
const orderSchema = new mongoose.Schema({
  customer: { type: ObjectId, ref: 'Customer' },
  products: [{
    type: ObjectId,
    ref: 'Product',
    quantity: Number
  }],
  dateCreated: { type: Date, default: Date.now }
})

// export model
module.exports = mongoose.model('Order', orderSchema)

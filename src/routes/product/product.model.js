/**
 * Product model
 * @module product.model
 */

// import data modeling library
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// define schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: ObjectId, ref: 'Category' },
  department: { type: ObjectId, ref: 'Department' },
  price: Number,
  images: [{ type: ObjectId, ref: 'Image' }],
  attributes: [{ type: ObjectId, ref: 'Attribute' }],
  display: { type: Boolean, default: '0' }
})

// export model
module.exports = mongoose.model('Product', productSchema)

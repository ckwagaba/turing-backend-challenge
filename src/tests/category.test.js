/**
 * test category model
 * @module category.test
 */

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// import assertion library
const expect = require('chai').expect

// import category model
const Category = require('../models/category')

/** group tests */
describe('Category Model', () => {
  it('should have a name', () => {
    const category = new Category()
    category.validate((err) => {
      expect(err.errors['name']).to.exist
    })
  })
})

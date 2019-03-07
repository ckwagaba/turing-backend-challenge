/**
 * test Department model
 * @module department.test
 */

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// import assertion library
const expect = require('chai').expect

// import department model
const Department = require('./department.model')

/** group tests */
describe('Department Model', () => {
  it('should have a name', () => {
    const department = new Department()
    department.validate((err) => {
      expect(err.errors['name']).to.exist
    })
  })
})

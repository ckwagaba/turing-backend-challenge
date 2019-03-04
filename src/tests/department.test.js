/**
 * test department model
 * @module departments.test
 */

// import assertion library
const expect = require('chai').expect;
 
// import Department model
const Department = require('../models/department');

/** group tests */
describe('Department Model', () => {
    it('should have a name', () => {
        const department = new Department();
        department.validate((error) => {
            expect(error.errors['name']).to.exist;
        });
    });
});
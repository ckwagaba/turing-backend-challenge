/**
 * define department model
 * @module department
 */

// import data modeling library
const mongoose = require('mongoose');

// define schema
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

// export model
module.exports = mongoose.model('Department', departmentSchema);
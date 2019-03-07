/**
 * main route
 * @module main.route
 */

// import department route
const departmentRoute = require('./department/department.route')

// export main route
module.exports = (app, db) => {
  departmentRoute(app, db)
}

/**
* Department operations
* @module department.route
*/

// import model
const Department = require('./department.model')

// import validator
const validator = require('validator')

/**
 * handle requests from client
 * POST GET PUT DELETE
 */
module.exports = (app, db) => {
  /** create a department */
  app.post('/department', (req, res) => {
    // instantiate object with request data
    const department = new Department(req.body)

    // validate the data
    if (req.body.name !== undefined && !validator.isEmpty(req.body.name)) {
      // save valid data
      department.save()
        .then((doc) => {
          // on success
          res.status(201)
          res.send({
            message: 'Department successfully created.',
            doc
          })
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    } else {
      // send error message
      res.status(400)
      res.send({
        message: 'Department name is required.'
      })
    }
  })

  /** get all departments */
  app.get('/department', (req, res) => {
    if (req.query.q) {
      // filter departments by name
      Department.find({ name: req.query.q })
        .then((docs) => {
          // on success
          res.status(200)
          res.send(docs)
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    } else {
      // all
      Department.find()
        .then((docs) => {
          // on success
          res.status(200)
          res.send(docs)
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    }
  })

  /** get department by id */
  app.get('/department/:id', (req, res) => {
    // id should be valid
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      Department.findById(req.params.id)
        .then((doc) => {
          // on success
          if (doc === null) {
            /** findById returns null if ID format is correct even if resource doesn't exist */
            // resource not found
            res.status(404)
            res.send({
              message: 'Department with ID not found.'
            })
          } else {
            // return resource
            res.status(200)
            res.send(doc)
          }
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    } else {
      res.status(400)
      res.send({
        message: 'Please use a valid ID.'
      })
    }
  })

  /** update department */
  app.put('/department/:id', (req, res) => {
    // id should be valid
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      Department.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((doc) => {
          // on success
          if (doc === null) {
            /** findById returns null if ID format is correct even if resource doesn't exist */
            // resource not found
            res.status(404)
            res.send({
              message: 'Department with ID not found.'
            })
          } else {
            // return resource
            res.status(200)
            res.send({
              message: 'Department successfully updated.',
              doc
            })
          }
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    } else {
      res.status(400)
      res.send({
        message: 'Please use a valid ID.'
      })
    }
  })

  /** delete department by id */
  app.delete('/department/:id', (req, res) => {
    // id should be valid
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      Department.findByIdAndDelete(req.params.id)
        .then((doc) => {
          // on success
          if (doc === null) {
            /** findById returns null if ID format is correct even if resource doesn't exist */
            // resource not found
            res.status(404)
            res.send({
              message: 'Department with ID not found.'
            })
          } else {
            // return resource
            res.status(200)
            res.send({
              message: 'Department successfully deleted.',
              doc
            })
          }
        })
        .catch((err) => {
          // on failure
          res.status(500)
          res.send({
            message: 'Oops! Something went wrong.'
          })
          console.log(err)
        })
    } else {
      res.status(400)
      res.send({
        message: 'Please use a valid ID.'
      })
    }
  })
}

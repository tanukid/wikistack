var express = require('express')
var router = express.Router()
const { User, Page } = require('../models')

// get user 123, do not change db
router.get('/:id', (req, res) => {
  Page.findAll()
})

// get all users, do not change db
router.get('/', function (req, res, next) {
  User.findAll({}).then(function (users) {
    res.render('users', { users })
  }).catch(next)
})

// create a user in the db
router.post('/', (req, res) => {
  res.send('users')
})

// update user 123 in the db
router.put('/:id', (req, res) => {
  res.send('users')
})

router.delete('/:id', (req, res) => {
  res.send('users')
})

module.exports = router

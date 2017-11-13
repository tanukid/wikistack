var express = require('express');
var router = express.Router();

// get user 123, do not change db
router.get('/:id', (req, res) => {
  res.send('users')
})

// get all users, do not change db
router.get('/', (req, res) => {
  res.send('users')
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

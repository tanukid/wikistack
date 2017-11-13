var express = require('express')
var router = express.Router()

// retrieve the "add a page" form
router.get('/add', (req, res) => {
  res.render('addpage')
})

// retrieve all wiki pages
router.get('/', (req, res) => {
  res.render('index')
})

// submit a new page to the database
router.post('/', (req, res) => {})

module.exports = router

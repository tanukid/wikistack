var express = require('express')
var models = require('../models');
var Page = models.Page;
var router = express.Router()

// retrieve the "add a page" form
router.get('/add', (req, res) => {
  res.render('addpage')
})

// retrieve all wiki pages
router.get('/', (req, res) => {
  res.redirect('/')
})

// submit a new page to the database
router.post('/', (req, res) => {

  var page = Page.build({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    urlTitle: req.body.title,
    status: req.body.status
  })
  page.save()
    .then(() => {
    res.redirect('/')
  }).catch(console.error)
})

module.exports = router

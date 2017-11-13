'use strict'
const { Page } = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Page.findAll().then(pages => {
    res.render('index', { pages })
  }).catch(console.error)
})

module.exports = {
  rootRouter: router,
  wikiRouter: require('./wiki'),
  userRouter: require('./user')
}


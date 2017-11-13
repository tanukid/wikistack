'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = {
  rootRouter: router,
  wikiRouter: require('./wiki'),
  userRouter: require('./user')
}


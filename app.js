'use strict';
var express = require('express')
var app = express()
var morgan = require('morgan')
var nunjucks = require('nunjucks')
var {
  wikiRouter,
  userRouter,
  rootRouter
} = require('./routes')
var path = require('path')
var bodyParser = require('body-parser')
const { db } = require('./models')

// templating boilerplate setup
app.engine('html', nunjucks.render) // how to render html templates
app.set('view engine', 'html') // what file extension do our templates have
nunjucks.configure('views', { noCache: true }) // where to find the views, caching off

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })) // for HTML form submits
app.use(bodyParser.json()) // would be for AJAX requests


db.sync({})
  .then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000!'))
  })
  .catch(console.error)

app.use(express.static(path.join(__dirname, '/public')))

app.use('/', rootRouter)
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)

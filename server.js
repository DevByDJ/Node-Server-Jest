import express from 'express'
import path from 'path'
import database from './database.js'
import makeApp from './app.js'

const app = express(makeApp(database))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(logger)

app.get('/', (req, res) => 
{
  console.log('App is running..')
  res.render('index')
})

function logger(req, res, next) {
  console.log("The current URL path is: " + req.originalUrl)
  next()
}

app.listen(8080)
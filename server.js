import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import database from './models/database.js'
import makeApp from './routes/login.js'
import loginRouter from './routes/login.js'
import { createNewUser } from './models/database.js'

const app = express(makeApp(database))

const uri = 'mongodb+srv://djoseph13:ecV0jmMYY7xW5Bmi@cluster0.b9dbr5a.mongodb.net/?retryWrites=true&w=majority'

async function connect()
{
  try
  {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  }
  catch (error)
  {
    console.log(error)
  }
}

connect()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(logger)

app.get('/', (req, res) => 
{
  console.log('App is running..')
  
})

app.get('/login', (req, res) =>
{
  console.log('Login Page')
  res.render('login')
})

app.get('/dashboard', (req, res) =>
{
  console.log('Welcome to the Dashboard')
  res.render('dashboard')
})

app.get('/register', (req, res) =>
{
  console.log('register page')
  res.render('register')
})

app.post('/register', (req, res) =>
{
  console.log(req.body.email)
  createNewUser(req.body.email, req.body.password, 
    req.body.firstName, req.body.lastName)
  res.redirect('/login')
})


function logger(req, res, next) {
  console.log("The current URL path is: " + req.originalUrl)
  next()
}

app.listen(8080)
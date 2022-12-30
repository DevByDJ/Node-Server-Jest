const express = require('express')
const mongoose = require('mongoose')
const registerRouter = require('./routes/register.js') 
const loginRouter = require('./routes/login.js')

const app = express()

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

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.get('/', (req, res) => 
{
  console.log('App is running..')
  
})


app.get('/dashboard', (req, res) =>
{
  console.log('Welcome to the Dashboard')
  res.render('dashboard')
})



function logger(req, res, next) {
  console.log("The current URL path is: " + req.originalUrl)
  next()
}

const port = process.env.PORT || 8080
app.listen(port)

module.exports = app
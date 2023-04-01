const express = require('express')
const registerRouter = require('./routes/register.js') 
const loginRouter = require('./routes/login.js')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(logger)

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.get('/', (req, res) => 
{
  console.log('App is running..')
  //res.statusCode(400)
  
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

module.exports = app
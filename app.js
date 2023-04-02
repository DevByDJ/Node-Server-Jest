const express = require('express')
const registerRouter = require('./routes/register.js') 
const loginRouter = require('./routes/login.js')
const dashboardRouter = require('./routes/dashboard.js')
const protectedRouter = require('./routes/protected.js')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))

app.use(express.static('public'))

app.use(logger)

app.locals.userName = "Danny Joseph"

app.use('/register', registerRouter)

app.use('/login', loginRouter)

app.use('/protected', protectedRouter)

app.use('/dashboard', dashboardRouter)

app.get('/', (req, res) => 
{
  console.log('App is running..')
  //res.statusCode(400)
  
})


function logger(req, res, next) {
  console.log("The current URL path is: " + req.originalUrl)
  next()
}


module.exports = app
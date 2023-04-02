const express = require('express')
const {json} = require('express')
const { findUsername } = require('../scripts/dashboard.js')
const { authenticateToken } = require('../authentication.js')

const router = express.Router()

router.use(json())

router.use(async(req, res, next) => {
  try{
    console.log('Welcome to the Dashboard')
    const {firstName, lastName} = req.body
    const userName = await findUsername(firstName, lastName)
    console.log('Username returned is: ', userName)
    res.locals.userName = userName
    return next()
    
  }catch (error){
    console.log(error)
  }
})

router.get('/', (req, res) => {

  res.render('dashboard')

})

module.exports = router
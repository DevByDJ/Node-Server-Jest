const express = require('express')
const {json} = require('express')
const { authenticateToken } = require('../authentication.js')

const router = express.Router()

router.use(json())

router.get('/', authenticateToken, (req, res) =>
{
  res.redirect('/dashboard')
})


// Exports this module as a router to be called by the main router.
module.exports = router
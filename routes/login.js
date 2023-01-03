const express = require('express')
const {json} = require('express')
const {validateUser} = require('../scripts/login.js') 

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  res.render('login')
})

router.post('/', async (req, res) => 
  {
    
    try
    {
      const { email, password } = req.body
      console.log("email: ", email)
      console.log("password: ", password)
      const user = await validateUser(email, password)
      if(!user)
      {
        res.status(400).send({ error: "FAILED TO LOG IN!" })
        return
      }
      else{
        console.log('SUCCESS YOU ARE LOGGED IN')
        res.status(200).redirect('dashboard')
      }

    } catch(error){
      console.log(error)
      res.status(500)
    }

  })

// Exports this module as a router to be called by the main router.
module.exports = router
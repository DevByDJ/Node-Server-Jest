const express = require('express')
const {json} = require('express')
const {validateUser} = require('../scripts/login.js') 

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  console.log('Login Page')
  res.render('login')
})

router.post('/', async (req, res) => 
  {

    // if(!email || !password)
    // {
    //   res.status(400).send({ error: "YOU MUST ENTER IN A USERNAME AND PASSWORD" })
    //   return 
    // }
    
    try
    {
      const { email, password } = req.body
      console.log("username: ", email)
      console.log("password: ", password)
      const user = await validateUser(email, password)
      if(!user)
      {
        res.status(400).send({ error: "FAILED TO LOG IN!" })
        return
      }
      else{
        console.log('SUCCESS YOU ARE LOGGED IN')
        res.redirect('dashboard')
      }

    } catch(error){
      console.log(error)
      res.status(500)
    }

  })

// Exports this module as a router to be called by the main router.
module.exports = router
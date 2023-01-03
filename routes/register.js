const express = require('express')
const {json} = require('express')
const { createNewUser } = require('../scripts/register.js')

const router = express.Router()

router.use(json())

router.get('/', (req, res) =>
{
  console.log('register page')
  res.render('register')
})

router.post('/', async (req, res) =>
{

  try
    {
      const {email, password, firstName, lastName} = req.body
      console.log('Peep: ', email, password, firstName, lastName)
      const userCreated = await createNewUser(email, password, firstName, lastName)
      if(userCreated)
      {
        res.status(200).redirect('login')
        return
      }
      else
      {
        console.log('Peep: ', userCreated)
        res.status(400).send({ error: "user could not be created!"})
        return
      }

    }

    catch (error)
    {
      res.sendStatus(500)
      return
    }
  
})


module.exports = router
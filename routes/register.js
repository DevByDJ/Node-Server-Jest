import express from 'express'
import { createNewUser } from '../scripts/register.js'

const router = express.Router()

router.get('/', (req, res) =>
{
  console.log('register page')
  res.render('register')
})

router.post('/', async (req, res) =>
{

    const {_id, username, password, firstName, lastName} = req.body

    if (!password || !username)
    {
      res.sendStatus(400)
      return
    }

    else
    {
      try
      {
        const userCreated = await createNewUser(username, password, firstName, lastName)
        if(userCreated)
        {
          res.status(200).send({ _id })
          return
        }
        else
        {
          res.status(400).send({ error: "user could not be created!"})
          return
        }

      }

      catch (error)
      {
        res.sendStatus(500)
        return
      }
    }
  
})


export default router
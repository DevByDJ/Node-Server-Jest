import express from 'express'

export default function(database) 
{
  
  let app = express()

  app.use(express.json())
  
  app.post('/login', async (req, res) => 
  {
    const {username, password} = req.body

    if (!password || !username)
    {
      res.sendStatus(400)
      return
    }

    else
    {
      try
      {
        const user = await database.getUser(username)
        if(user)
        {
          res.status(400).send({ error: "username already taken" })
          return
        }
        const userId = await database.createUser(username, password)
        res.send({ userId })     
      }

      catch (error)
      {
        res.sendStatus(500)
        return
      }
    }

  })

  return app
}

// Exports this module as a router to be called by the main app.

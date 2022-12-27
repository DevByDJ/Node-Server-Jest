import express from 'express'

export default function(database) 
{
  let app = express()

  app.use(express.json())
  app.post('/users', async (req, res) => 
  {
    const {username, password} = req.body

    if (!password || !username)
    {
      res.sendStatus(400)
      return
    }

    const userId = await database.createUser(username, password)

    res.send({ userId })
  })

  return app
}


import request from 'supertest'
import app from './app.js'

describe("POST /users", () => 
{
  describe("given a username and password", () => 
  {
    // TODO: should save the username and password to the database
    // TODO: should respond with a json object containing the user id
    
    it("should respond with a 200 status code", async () => 
    {
      const response = await request(app)
      .post("/users")
      .send(
      {
        //username: "username",
        password: "password"
      })

      
      expect(response.statusCode).toBe(200)
    })

    it("should specify json in the content type header", async () => 
    {
      const response = await request(app)
      .post("/users")
      .send(
      {
        username: "username",
        password: "password"
      })

      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })

    it("should contain a response with a userID", async () => 
    {
      const response = await request(app)
      .post("/users")
      .send(
      {
        username: "username",
        password: "password"
      })

      expect(response.body.userId).toBeDefined()
    })

  describe("when the username and password is missing", () => 
  {
    it("should respond with a status code 400", async () => 
    {
      // new array of body data
      const bodyData = 
        [
          {username: "username"},
          {password: "password"},
          {}
        ]

        // for every element in body data, save under 'body'
        for (const body of bodyData) 
        {
          // each loop sends body and expects a response.
          const response = await request(app).post("/users").send(body)

          expect(response.statusCode).toBe(400)
        }
    })
  })
})
})
import request from 'supertest'
import makeApp from './app.js'
import {jest} from '@jest/globals'

const createUser = jest.fn()
const app = makeApp({createUser})


describe("POST /users", () => 
{
  
  beforeEach(() =>
  {
    createUser.mockReset()
    createUser.mockResolvedValue(0)
  })

  describe("given a username and password", () => 
  {


    it("should save the username and password to the database", async () =>
    {
      const bodyData = 
      [
        {username: "username1", password: "password1"},
        {username: "username2", password: "password2"},
        {username: "username3", password: "password3"}
      ]

      for(const body of bodyData)
      {
        createUser.mockReset()                                   // Resets mock state
        await request(app).post("/users").send(body)             
        expect(createUser.mock.calls.length).toBe(1)             // expects function to be called once
        expect(createUser.mock.calls[0][0]).toBe(body.username)  // expects the first time the function is called [0] the first parameter [0] is username.
        expect(createUser.mock.calls[0][1]).toBe(body.password)  // expects the first time the function is called [0] the second parameter [1] is password.
      }

    })


    it("should respond with a json object containing the user id", async () =>
    {
      for (let i = 0; i < 10; i++)
      {
        createUser.mockReset()
        createUser.mockResolvedValue(i)
        const response = await request(app)
        .post("/users")
        .send(
          {
            username: "username",
            password: "password"
          })

        expect(response.body.userId).toBe(i)
      }
    })
    


    it("should respond with a 200 status code", async () => 
    {
      const response = await request(app)
      .post("/users")
      .send(
      {
        username: "username",
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
require("dotenv").config()
const app = require('../app')
const request = require('supertest')
let mongoose = require('mongoose')
const mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB)

describe("Register Route Test", () => {

  let server;

  beforeAll(() => {
    server = app.listen(5000)
  })

  afterAll(done => {
    mongoose.connection.close();
    server.close(done)
  })

  describe("/Get Register routes test", () => {

    it("should return a 200", async () => {
      const response = await request(server)
      .get('/register')

      expect(response.status).toBe(200)
            
    })

  })

  describe("/Post Reigster routes test", () => {

    it("should return a 302 when a username, password, first and last name have been given!", async () => {

      const response = await request(app)
      .post('/register')
      .send(
        {
          email: "test@register-test.com",
          password: "password",
          firstName: "unit-test-register",
          lastName: "unit-test-register"
        }
      )

      expect(response.status).toBe(302)
      
      
    })

    it("should return a 400 when a username, password, first and last name have NOT been given!", async () => {
      
      const bodyData = [
        {email: "test@gmail.com",
         password: "password"},
        {email: "test@gmail.com",
         password: "password"},
        {}
      ]

      for(const body of bodyData)
      {
        const response = await request(server)
        .post('/register')
        .send(body)

        expect(response.status).toBe(400)
      }

    })

  })
})
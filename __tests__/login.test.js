require("dotenv").config()
const app = require('../app')
const request = require('supertest')
let mongoose = require('mongoose')
const mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB)

describe("Login Route Test", () => {

  let server;

  beforeAll(() => {
    server = app.listen(3002)
  })

  afterAll(done => {
    mongoose.connection.close();
    server.close(done)
  })

  describe("/Get Login routes test", () => {

    it("should return a 200", async () => {
      const response = await request(server)
      .get('/login')

      expect(response.status).toBe(200)
            
    })

  })

  describe("/Post Login routes test", () => {

    it("should return a 200 when a username and password is validated!", async () => {
      const response = await request(server)
      .post('/login')
      .send(
        {
          email: "test@email.com",
          password: "password"
        }
      )
      expect(response.status).toBe(200)
      
      
    })

    it("should return a 400 when a username or password is missing!", async () => {
      
      const bodyData = [
        {email: "username"},
        {password: "password"},
        {}
      ]

      for(const body of bodyData)
      {
        const response = await request(server)
        .post('/login')
        .send(body)

        expect(response.status).toBe(400)
      }

    })

  })
})
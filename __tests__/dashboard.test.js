const app = require('../app')
const request = require('supertest')
let mongoose = require('mongoose')
let mongoDB = 'mongodb+srv://djoseph13:ecV0jmMYY7xW5Bmi@cluster0.b9dbr5a.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDB)

describe("Register Route Test", () => {

  let server;

  beforeAll(() => {
    server = app.listen(4000)
  })

  afterAll(done => {
    mongoose.connection.close();
    server.close(done)
  })

  describe("/Get Dashboard routes test", () => {

    it("should return a 200", async () => {
      const response = await request(server)
      .get('/dashboard')

      expect(response.status).toBe(200)
            
    })

    it("should display the user's first and last name", async () => {
      const response = await request(server)
      .get('/dashboard')
      .send({
        firstName: "Danny",
        lastName: "Joseph"
      })

      expect(response.status).toBe(200)

    })

  })
})
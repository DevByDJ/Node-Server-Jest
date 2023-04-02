require("dotenv").config()
const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
mongoose.connect(uri)
const User = require('../models/database')

describe('User model test', () => {
  beforeAll(async () => {
    await User.remove({})
  })

  afterEach(async () => {
    await User.remove({})
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it("has a module", () => {
    expect(User).toBeDefined()
  })
})

describe("GET Users", () => {

  beforeAll(async () => {
    const uri = 'mongodb+srv://djoseph13:ecV0jmMYY7xW5Bmi@cluster0.b9dbr5a.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(uri, { useNewUrlParser: true })
  })

  it("get a user", async () => {
    const user = new User ({
      email: "test@email.com",
      password: "password",
      firstName: "John",
      lastName: "Smith"
    })

    await user.save()

    const foundUser = await User.findOne({ email: "test@email.com"})
    const expected = "test@email.com"
    const actual = foundUser.email
    expect(actual).toEqual(expected)
  })


})

describe("SAVE Users", () => {

  beforeAll(async () => {
    const uri = process.env.MONGODB_URI
    await mongoose.connect(uri, { useNewUrlParser: true })
  })

  it("save a user", async () => {
    const user = new User ({
      email: "test@email.com",
      password: "password",
      firstName: "John",
      lastName: "Smith"
    })

    const savedUser = await user.save()
    const expected = "test@email.com"
    const actual = savedUser.email
    expect(actual).toEqual(expected)
  })
  

})

describe("UPDATE Users", () => {

  beforeAll(async () => {
    const uri = process.env.MONGODB_URI
    await mongoose.connect(uri, { useNewUrlParser: true })
  })

  it("update a user", async () => {
    const user = new User ({
      email: "test@email.com",
      password: "password",
      firstName: "John",
      lastName: "Smith"
    })

    user.email = "new@email.com"
    const updatedUser = await user.save()
    const expected = "new@email.com"
    const actual = updatedUser.email
    expect(actual).toEqual(expected)
  })

})
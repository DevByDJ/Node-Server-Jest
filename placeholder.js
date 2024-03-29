import request from 'supertest'
import app from './server.js'
import {jest} from '@jest/globals'



describe("POST /login", () => 
{
  
  beforeEach(() =>
  {
    // createUser.mockReset()
    // createUser.mockResolvedValue(0)
    // validateUser.mockReset()
    // validateUser.mockResolvedValue(0)
  })

  describe("given a username and password", () => 
  {


    // it("should save the username and password to the database", async () =>
    // {
    //   const bodyData = 
    //   [
    //     {username: "username1", password: "password1"},
    //     {username: "username2", password: "password2"},
    //     {username: "username3", password: "password3"}
    //   ]

    //   for(const body of bodyData)
    //   {
    //     createUser.mockReset()                                   // Resets mock state
    //     await request(login)
    //     .post("/login")
    //     .send(body)             
    //     expect(createUser.mock.calls.length).toBe(1)             // expects function to be called once
    //     expect(createUser.mock.calls[0][0]).toBe(body.username)  // expects the first time the function is called [0] the first parameter [0] is username.
    //     expect(createUser.mock.calls[0][1]).toBe(body.password)  // expects the first time the function is called [0] the second parameter [1] is password.
    //   }

    // })

    it("should check the username against the database", async () =>
    {
      const bodyData = 
      [
        {username: "username1", password: "password1"},
        {username: "username2", password: "password2"},
        {username: "username3", password: "password3"}
      ]

      for(const body of bodyData)
      {
        validateUser.mockReset()                                   // Resets mock state
        await request(login)
        .post("/login")
        .send(body)             
        expect(validateUser.mock.calls.length).toBe(1)             // expects function to be called once
        expect(validateUser.mock.calls[0][0]).toBe(body.username)  // expects the first time the function is called [0] the first parameter [0] is username.
        
      }

    })


    it("should respond with a json object containing the user id", async () =>
    {
      for (let i = 0; i < 10; i++)
      {
        createUser.mockReset()
        createUser.mockResolvedValue(i)
        const response = await request(login)
        .post("/login")
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
      const response = await request(login)
      .post("/login")
      .send(
      {
        username: "username",
        password: "password"
      })

      
      expect(response.statusCode).toBe(200)
    })

    it("should contain a response with a userID", async () => 
    {
      
      const response = await request(login)
      .post("/login")
      .send(
      {
        username: "username",
        password: "password"
      })

      expect(response.body.userId).toBeDefined()
    })

  })
  describe("the ERRORS that could occur", () => 
  {
    it("should respond with a status code 400 if a username, password or both are missing.", async () => 
    {
      
      const bodyData =                                                  // new array of body data
        [
          {username: "username"},
          {password: "password"},
          {}
        ]

        
        for (const body of bodyData)                                    // for every element in body data, save under 'body'
        {
          
          
          const response = await request(login)                           // each loop sends body and expects a response.
          .post("/login")
          .send(body)

          expect(response.statusCode).toBe(400)

        }
    })

    // it("should respond with a status code 400 if the username is already taken.", async () =>
    // {
    //   validateUser.mockImplementation(() => true);                           // Mock the value of username in the argument .validateUser(username)

    //   const response = await request(login)                               // Send a POST request to the '/login' endpoint with a body containing a username and password
    //   .post("/login")
    //   .send(
    //   {
    //     username: "username",
    //     password: "password"
    //   })

    //   expect(response.status).toBe(400)                                 // Expect the response status code to be 400
    //   expect(response.body).toEqual({error: "username already taken"})  // Expect the response body to contain the following.
    // })

    it('should respond with a 500 status code when an error is thrown in the try block', async () => {

      
      validateUser.mockImplementation(() => false);                          // Mock the value of username in the argument .validateUser(username)
      
      createUser.mockImplementation(() => {                             // Mock the .createUser function to throw an error
        throw new Error('Mock error');
      });

      const response = await request(login)                               // Send a POST request to the '/login' endpoint with a body containing a username and password
      .post('/login')
      .send(
        {
          username: 'username', 
          password: 'password'
        }
      );

      
      expect(response.status).toBe(500);                                // Expect the response status code to be 500
    });
    

  })
})
const request = require("supertest");
const app = require("../app");
const jwt = require("jsonwebtoken");

describe("Authentication Middleware Test", () => {
  let server;

  beforeAll(() => {
    server = app.listen(5000);
  })

  afterAll((done) => {
    server.close(done);
  })

  describe("Testing /dashboard route with authentication middleware", () => {
    it("should return a 401 status if no token is provided", async () => {
      const response = await request(server).get("/protected");
      expect(response.status).toBe(401);
    })

    it("should return a 403 status if an invalid token is provided", async () => {
      const response = await request(server)
        .get("/protected")
        .set("Authorization", "Bearer invalidToken");
      expect(response.status).toBe(403);
    })

    it("should return a 200 status and user data if a valid token is provided", async () => {
      // Replace 'process.env.ACCESS_TOKEN_SECRET' with your actual secret or a test secret
      const token = jwt.sign({ id: "testUser" }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      })

      const response = await request(server)
        .get("/dashboard")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      // Add any additional checks for the response body if needed
    })
  })
})
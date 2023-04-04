# Items Completed
- Added authentication to a web application, I utilized JSON Web Tokens (JWT), Express.js, and Node.js. The login page collects the user's login credentials, which are then verified against a database. Upon successful verification, a JWT is generated and sent back to the client as a response. The JWT contains user data, which is used for subsequent requests to authorized routes. Middleware is used to verify the JWT and authorize access to protected routes.
- I created unit tests for the MongoDB database connection, login, register, and dashboard pages of a web application, as well as the new authentication that uses JWT, using a testing framework Jest and Supertest. Within the framework, I wrote test cases that simulate user interactions with the various pages and verify the expected outcomes. For the MongoDB connection, I wrote a test that the connection is successful and that the expected data can be retrieved from the database. For the authentication, I wrote a test that a JWT is generated and decoded correctly, and that access to protected pages is correctly restricted based on the presence of a valid token.

# Items Attempted (w/ Difficulty)
- Securing API key using GitHub Secrets (Medium)
- Add an expiration to JWT (Easy)
- Create New Unit Tests for Dashboard (Hard)
- Access a user's database entry to retrieve their First and Last name and display it on the Dashboard (Medium)

## Pull Requests
- JWT Authentication: https://github.com/DevByDJ/Node-Server-Jest/pull/5
- Unit Tests: https://github.com/DevByDJ/Node-Server-Jest/pull/4

## Milestones
- Create Dashboard: https://github.com/DevByDJ/Node-Server-Jest/milestones?with_issues=no

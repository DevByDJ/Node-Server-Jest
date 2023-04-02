const jwt = require('jsonwebtoken')


function authenticateToken(req, res, next) {

  // Get the 'authorization' header from the incoming request
  const authHeader = req.headers['authorization']
  // If the header exists, split it by space (' ') and get the second part (the token)
  const token = authHeader && authHeader.split(' ')[1]

  console.log('authHeader: ', authHeader)
  console.log('token: ', token)

  if(token == null)
    return res.sendStatus(401)

  // It checks the token's signature and expiration against the secret key
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err)
      return res.sendStatus(403)

    // If the token is valid, attach the decoded user data to the request object
    // so it can be used by subsequent middleware or route handlers
    req.user = user
    next()
  })
}

module.exports = {authenticateToken}
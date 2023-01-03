const User = require('../models/database.js')

function createNewUser (email, password, firstName, lastName)
{
  if(email && password && firstName && lastName)
  {
    try
    {
      let newUser = new User (
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        }
      )

      newUser.save()
      

    } catch (error) {
      console.log(error)
    }

    return true
  }

  else
  {
    return false
  }
  
}

module.exports = {createNewUser}



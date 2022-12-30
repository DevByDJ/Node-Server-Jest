const User = require('../models/database.js')

function createNewUser (email, password, firstName, lastName)
{
  try
  {
    let newUser = new User (
      {
        username: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }
    )
    newUser.save()
  } catch (error) {
    console.log(error)
  }
  
}



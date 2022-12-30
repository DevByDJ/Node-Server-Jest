import User from '../models/database.js'

export function createNewUser (email, password, firstName, lastName)
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



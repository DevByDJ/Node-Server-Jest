import User from '../models/database.js'

export async function validateUser (email, password)
{
  try
  {
    let validated = false
    const validatedEmail = await User.findOne({username: email})

    const validatedPassword = await User.findOne({password: password})


    if(validatedEmail.username == email)
    {
      console.log("Email verified")

      if(validatedPassword.password == password)
      {
        console.log("Password verified")
        validated = true
        return validated
      }
      
    }

  } catch (error){
    console.log(error)
  }
}
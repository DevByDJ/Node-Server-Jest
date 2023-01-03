const User = require('../models/database.js')

async function validateUser (email, password)
{
  try
  {
    let validated = false
    const validatedEmail = await User.findOne({email: email})

    const validatedPassword = await User.findOne({password: password})


    if(validatedEmail.email == email)
    {
      console.log("Email verified")

      if(validatedPassword.password == password)
      {
        console.log("Password verified")
        validated = true
        
      }
      
    }
    return validated

  } catch (error){
    console.log(error)
  }
}

module.exports = {validateUser}
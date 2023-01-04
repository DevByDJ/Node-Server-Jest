const User = require('../models/database.js')

async function validateUser (email, password)
{
  try
  {
    let validated = false
    const validatedProfile = await User.findOne({email: email, password: password})


    if(validatedProfile.email == email)
    {
      console.log("Email verified")

      if(validatedProfile.password == password)
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
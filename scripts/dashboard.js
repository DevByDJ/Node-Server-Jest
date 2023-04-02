const User = require('../models/database.js')
const {validateUser} = require('../scripts/login')

async function findUsername(firstName, lastName)
{
  try
  {
    const firstNameString = JSON.stringify(firstName)
    const lastNameString = JSON.stringify(lastName)

    const userName = firstNameString + lastNameString
    console.log(userName)
    
    return userName
    
  } catch (error){
    console.log(error)
  }
}

module.exports = {findUsername}
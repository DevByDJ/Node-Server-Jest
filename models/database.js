import mongoose from 'mongoose'

const schema = mongoose.Schema

const userSchema = new schema
(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String
  }, { timestamps: true}
)

export function createNewUser (email, password, firstName, lastName)
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
  return newUser
}


const User = mongoose.model('user', userSchema)

export default User
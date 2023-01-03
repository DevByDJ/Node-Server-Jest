const mongoose = require('mongoose')
const uri = 'mongodb+srv://djoseph13:ecV0jmMYY7xW5Bmi@cluster0.b9dbr5a.mongodb.net/?retryWrites=true&w=majority'
const app = require('./app')

async function connect()
{
  try
  {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  }
  catch (error)
  {
    console.log(error)
  }
}

connect()

const port = process.env.PORT || 8080

app.listen(port);


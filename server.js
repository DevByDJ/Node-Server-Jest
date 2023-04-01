const mongoose = require('mongoose')
const uri = 'mongodb+srv://djoseph13:ecV0jmMYY7xW5Bmi@cluster0.b9dbr5a.mongodb.net/?retryWrites=true&w=majority'
const app = require('./app')

// Async function to connect to MongoDB
async function connect() {
  try {
    // Set strictQuery to false
    mongoose.set('strictQuery', false);
    // Connect to MongoDB using the URL stored in uri
    await mongoose.connect(uri);
    // Print success message to console if connection is successfull 
    console.log('Connected to MongoDB');
  } catch (error) {
    // Print any error messages to console
    console.log(error);
  }
}

connect()

// Setup a port to Listen on.
// If a port isn't specified, then use port 8080 as a fallback
const port = process.env.PORT || 8080; 

app.listen(port);


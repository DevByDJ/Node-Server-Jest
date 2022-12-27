import database from './database.js'
import app from './app.js'

const app = makeApp(database)

app.listen(8080)
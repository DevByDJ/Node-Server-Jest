import database from './database.js'
import makeApp from './app.js'

const app = makeApp(database)

app.listen(8080)
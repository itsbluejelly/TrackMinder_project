// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const express = require('express')
const dotenv = require('dotenv')
const eventLogger = require('./middleware/eventLogger')

// INSTANSIATE A SERVER APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARES
dotenv.config()

// ROUTE MIDDLEWARES
app.get("/", (req, res, next) => {
    res.send("Hello world")
    next()
})

// ACTIVATING THE SERVER
const port = process.env.PORT_NUMBER || 4000

app.listen(port, () => {
    eventLogger("Server activated successfully", `Server listening on port ${port}`, "eventLogs.txt")
})
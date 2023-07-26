// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')

// INSTANSIATE A SERVER APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARES
dotenv.config()
connectDB()

// ROUTE MIDDLEWARES
app.get("/", (req, res, next) => {
    res.send("Hello world")
    next()
})

// ACTIVATING THE SERVER
const port = process.env.PORT_NUMBER || 4000

mongoose.connection.once('open', () => (
    app.listen(port, () => (
        eventLogger("Connected to database successfully", `Server listening on port ${port}`, "databaseLogs.txt")
    ))
))
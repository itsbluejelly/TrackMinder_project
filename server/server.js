// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')
const rootRouter = require('./routers/rootRouter')
const userRouter = require('./routers/userRouter')
// const collectionsRouter = require('./routers/collectionsRouter')

// INSTANSIATE A SERVER APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARES
dotenv.config()
connectDB()
app.use(express.json())

// ROUTE MIDDLEWARES
app.use('/', rootRouter)
app.use('/user', userRouter)
// app.use('/collections', collectionsRouter)

// ACTIVATING THE SERVER
const port = process.env.PORT_NUMBER || 4000

mongoose.connection.once('open', () => (
    app.listen(port, () => (
        eventLogger("Connected to database successfully", `Server listening on port ${port}`, "databaseLogs.txt")
    ))
))
// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const eventLogger = require('./middleware/eventLogger')
const connectDB = require('./config/connectDB')
const corsOptions = require('./config/corsOptions')
const userVerifier = require('./config/userVerifier')
const rootRouter = require('./routers/rootRouter')
const userRouter = require('./routers/userRouter')
const collectionsRouter = require('./routers/collectionsRouter')
const tasksRouter = require('./routers/tasksRouter')

// INSTANSIATE A SERVER APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARES
dotenv.config()
connectDB()
app.use(cors())
app.use(express.json())

// ROUTE MIDDLEWARES
app.use('/', rootRouter)
app.get('/ok', (req, res, next)=> {
    res.status(200)
    next()
})
app.use('/user', userRouter)
app.use(userVerifier)
app.use('/collections', collectionsRouter)
app.use('/tasks', tasksRouter)

// ACTIVATING THE SERVER
const port = process.env.PORT_NUMBER || 4000

mongoose.connection.once('open', () => (
    app.listen(port, () => (
        eventLogger("Connected to database successfully", `Server listening on port ${port}`, "databaseLogs.txt")
    ))
))
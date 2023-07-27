// IMPORTING NECESSARY MIDDLEWARES AND CONTROLLERS
const express = require('express')
const tasksController = require('../controllers/tasksController')

// INSTANTIATE AN EXPRESS ROUTER
const tasksRouter = express.Router()

// ROUTE MIDDLEWARES
tasksRouter.route('/')
    .get(tasksController.getController)
    .post(tasksController.postController)
    .delete(tasksController.deleteController)

    // SUB-ROUTE MIDDLEWARES
    // tasksRouter.use('/task', subTaskRouter)

// EXPORTING TASKSROUTER
module.exports = tasksRouter
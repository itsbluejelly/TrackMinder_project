// IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('../middleware/eventLogger')
const TaskModel = require('../models/Task')

// A GETCONTROLLER FUNCTION THAT DEALS WITH GET REQUESTS
async function getController(req, res, next){
    res.send("Hello World")
    next()
}

// A POSTCONTROLLER FUNCTION THAT DEALS WITH POST REQUESTS
async function postController(req, res, next){
    res.send("Hello World")
    next()
}

// A DELETECONTROLLER FUNCTION THAT DEALS WITH DELETE REQUESTS
async function deleteController(req, res, next){
    res.send("Hello World")
    next()
}

// EXPORTING ALL CONTROLLERS
module.exports = {
    getController,
    postController,
    deleteController
}
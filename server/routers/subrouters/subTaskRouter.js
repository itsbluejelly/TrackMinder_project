// IMPORTING NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const subTaskController = require('../../controllers/subcontrollers/subTaskController')

// INSTANTIATING AN EXPRESS SERVER
const subTaskRouter = express.Router()

// ROUTE-MIDDLEWARES
subTaskRouter.route('/:id')
    .delete(subTaskController.deleteController)
    .patch(subTaskController.patchController)

// EXPORTING THE SUBTEASKROUTER
module.exports = subTaskRouter
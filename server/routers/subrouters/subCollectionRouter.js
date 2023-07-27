// IMPORT NECESSARY MIDDLEWARES AND CONTROLLERS
const express = require('express')
const subCollectionController = require('../../controllers/subcontrollers/subCollectionController')

// INSTANTIATE AN EXPRESS ROUTER
const subCollectionRouter = express.Router()

// ROUTE MIDDLEWARE
subCollectionRouter.route('/:id')
    .delete(subCollectionController.deleteController)
    .patch(subCollectionController.patchController)

// EXPORTING THE SUBCOLLECTIONROUTE
module.exports = subCollectionRouter
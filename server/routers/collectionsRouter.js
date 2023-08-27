// IMPORT NECESSARY MODULES AND CONTROLLERS AND ROUTERS
const express = require('express')
const collectionsController = require('../controllers/collectionsController')
const subCollectionRouter = require('./subrouters/subCollectionRouter')

// INSTANTIATE A ROUTER FROM EXPRESS
const collectionsRouter = express.Router()

// ROUTE MIDDLEWARES
collectionsRouter.route("/")
    .get(collectionsController.getController)
    .post(collectionsController.postController)
    .delete(collectionsController.deleteController)
    .put(collectionsController.putController)

    // SUB-ROUTE MIDDLEWARE
    collectionsRouter.use("/collection", subCollectionRouter)

// EXPORT THE COLLECTIONSROUTER
module.exports = collectionsRouter
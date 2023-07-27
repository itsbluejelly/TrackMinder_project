// IMPORT NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const collectionsController = require('../controllers/collectionsController')
// const subCollectionRouter = require('./subrouters/subCollectionRouter')

// INSTANTIATE A ROUTER FROM EXPRESS
const collectionsRouter = express.Router()

// ROUTE MIDDLEWARES
collectionsRouter.route("/")
    .get(collectionsController.getController)
    .post(collectionsController.postController)
    .delete(collectionsController.deleteController)

    // SUB-ROUTE MIDDLEWARE
    // collectionsRouter.use("/collection", subCollectionRouter)

// EXPORT THE COLLECTIONSROUTER
module.exports = collectionsRouter
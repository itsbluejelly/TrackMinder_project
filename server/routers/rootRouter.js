// IMPORT NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const rootController = require('../controllers/rootController')

// INSTANTIATE A ROUTER FROM EXPRESS
const rootRouter = express.Router()

// ROUTE MIDDLEWARES
rootRouter.all('/*', rootController)

// EXPORT THE ROOTROUTER
module.exports = rootRouter
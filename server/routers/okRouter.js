// IMPORTING NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const okController = require('../controllers/okController')

// INSTANTIATE THE EXPRESS ROUTER
const okRouter = express.Router()

// ROUTE MIDDLEWARES
okRouter.all('/', okController)

// EXPORTING THE OKROUTER
module.exports = okRouter
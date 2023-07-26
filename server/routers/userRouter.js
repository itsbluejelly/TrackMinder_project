// IMPORTING NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const { loginController, signupController } = require('../controllers/userController')

// INSTANTIATING A ROUTER FROM EXPRESS
const userRouter = express.Router()

// ROUTE MIDDLEWARES
userRouter.post('/login', loginController.postController)
userRouter.post('/signup', signupController.postController)

// EXPORTING THE USERSROUTER
module.exports = userRouter
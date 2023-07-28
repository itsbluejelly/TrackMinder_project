// IMPORTING NECESSARY MODULES AND CONTROLLERS
const express = require('express')
const userVerifier = require('../config/userVerifier')
const { loginController, signupController, signoutController } = require('../controllers/userController')

// INSTANTIATING A ROUTER FROM EXPRESS
const userRouter = express.Router()

// ROUTE MIDDLEWARES
userRouter.post('/login', loginController.postController)
userRouter.post('/signup', signupController.postController)
userRouter.delete('/signout', userVerifier, signoutController.postController)

// EXPORTING THE USERSROUTER
module.exports = userRouter
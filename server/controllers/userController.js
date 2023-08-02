// IMPORT NECESSARY MODULES AND MIDDLEWARE
const bcrypt = require('bcrypt')
const validator = require('validator')
const eventLogger = require('../middleware/eventLogger')
const UserModel = require('../models/User')
const CollectionModel = require('../models/Collection')
const TaskModel = require('../models/Task')
const JWTGenerator = require('../middleware/JWTGenerator')

// A SIGNUPPOST CONTROLLER THAT DEALS WITH SIGNUP REQUESTS
async function signupPostController(req, res, next){
    const { username, email, password } = req.body

    try{
        if(!username){
            throw new Error("You must provide a username")
        }else if(!email){
            throw new Error("You must provide an email")
        }else if(!validator.isEmail(email)){
            throw new Error("You must provide a correct email")
        }else if(!password){
            throw new Error("You must provide a password")
        }else if(password.length < 5){
            throw new Error("Your password must have a minimum of 5 characters")
        }

        const foundUser = await UserModel.findOne({ email })
        
        if(foundUser){
            throw new Error("This email is already in use")
        }else{
            const saltRounds = await bcrypt.genSalt(12)
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            const createdUser = await UserModel.create({username, email, password: hashedPassword})
            const token = JWTGenerator.JWTCreater(createdUser._id)
            
            res.status(201).json({
                success: `${createdUser.username}'s account successfully created`,
                
                user: {
                    email: createdUser.email,
                    username: createdUser.username,
                    token: token
                }
            })

            eventLogger("Account created successfully" ,`User id is ${createdUser._id}`, "usersLogs.txt")
        }
    }catch(error){
        res.status(400).json({ error: error.message })
        eventLogger(error.name, error.message, "errorLogs.txt")
    }

    next()
}

// A LOGINPOST CONTROLLER THAT DEALS WITH POST REQUESTS
async function loginPostController(req, res, next){
    const { username, email, password} = req.body

    try{
        if(!username){
            throw new Error("You must provide a username")
        }else if(!email){
            throw new Error("You must provide an email")
        }else if(!password){
            throw new Error("You must provide a password") 
        }else if(password.length < 5){
            throw new Error("Your password must have a minimum of 5 characters")
        }

        const foundUser = await UserModel.findOne({ email })
        
        if(!foundUser){
            throw new Error("This email is not registered")
        }else{
            const matchedPassword = await bcrypt.compare(password, foundUser.password)

            if(!matchedPassword){
                throw new Error("Invalid password")
            }else{
                const token = JWTGenerator.JWTCreater(foundUser._id)

                res.status(200).json({
                    success: `${foundUser.username} has successfully logged in`,

                    user: {
                        email: foundUser.email,
                        username: foundUser.username,
                        token: token
                    }
                })

                eventLogger(`User ${foundUser._id} has successfully logged in`, foundUser, "usersLogs.txt")
            }
        }
    }catch(error){
        res.status(401).json({ error: error.message })
        eventLogger(error.name, error.message, "errorLogs.txt")
    }

    next()
}

// A SIGNOUTPOSTCONTROLLER THAT DEALS WITH DELETE REQUESTS
async function signoutDeleteController(req, res, next){
    const { username, email, password} = req.body

    try{
        const userID = req.storedUser._id
        
        if(!username){
            throw new Error("You must provide a username")
        }else if(!email){
            throw new Error("You must provide an email")
        }else if(!validator.isEmail(email)){
            throw new Error("You must provide a correct email")
        }else if(!password){
            throw new Error("You must provide a password")
        }else if(password.length < 5){
            throw new Error("Your password must have a minimum of 5 characters")
        }

        const foundUser = await UserModel.findOne({ email })

        if(!foundUser){
            throw new Error("This email is not registered") 
        }else{
            const matchedPassword = await bcrypt.compare(password, foundUser.password)

            if(!matchedPassword){
                throw new Error("Invalid password")
            }else{
                const deletedUser = await UserModel.findByIdAndDelete(userID)
                await CollectionModel.deleteMany({ userID })
                await TaskModel.deleteMany({ userID })
                
                res.status(200).json({ success: "Account terminated successfully"})
                eventLogger("Account terminated successfully", `User ${deletedUser._id} successfully signed out`, "usersLogs.txt")
            }
        }
    }catch(error){
        if(
            error.message === "Cannot read properties of undefined (reading '_id')" 
                || 
            error.message === "Cannot read properties of null (reading '_id')"
        ){
            res.status(403).json({ error: "Imposter detected" })
        }else{
            res.status(400).json({ error: error.message })
        }
        
        eventLogger(error.name, error.message, "errorLogs.txt")
    }

    next()
}

// EXPORT THE CONTROLLERS
module.exports = {
    "loginController": { "postController": loginPostController},
    "signupController": { "postController": signupPostController},
    "signoutController": { "deleteController": signoutDeleteController}
}
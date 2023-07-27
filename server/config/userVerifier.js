// IMPORING NECESSARY MIDDLEWARE
const eventLogger = require('../middleware/eventLogger')
const JWTGenerator = require('../middleware/JWTGenerator')
const UserModel = require('../models/User')

// CREATING A USERVERIFIER FUNCTION THAT VALIDATES JWTS AND ALLOWS ACCESS
async function userVerifier(req, res, next){
    const { authorization } = req.headers

    try{
        if(!authorization){
            throw new Error("You must have an account to proceed")
        }

        const token = authorization.split(' ')[1]
        const { _id } = JWTGenerator.JWTVerifier(token)
        req.storedUser = await UserModel.findOne({ _id}).select("_id")

    }catch(error){
        res.status(403)
        eventLogger(error.name, error.message, "errorLogs.txt")
    }
    
    next()
}

// EXPORTING THE USERVERIFIER
module.exports = userVerifier
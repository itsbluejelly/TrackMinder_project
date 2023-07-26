// IMPORTING NECESSARY MIDDLEWARE
const JWT = require('jsonwebtoken')

// A JWT GENERATOR FUNCTION THAT CREATES A JWT ACCESS TOKEN
function JWTGenerator(id){
    return JWT.sign({id}, process.env.SECRET_KEY, { expiresIn: '24h' })
}

// EXPORTING THE JWT GENERATOR
module.exports = JWTGenerator
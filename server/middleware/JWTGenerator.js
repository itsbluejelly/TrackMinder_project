// IMPORTING NECESSARY MIDDLEWARE
const JWT = require('jsonwebtoken')

// A JWT GENERATOR FUNCTION THAT CREATES A JWT ACCESS TOKEN
function JWTCreater(_id){
    return JWT.sign({_id}, process.env.SECRET_KEY, { expiresIn: '24h' })
}

// A JWT VERIFIER FUNCTION THAT VERIFIES A JWT TOKEN
function JWTVerifier(token){
    return JWT.verify(token, process.env.SECRET_KEY)
}

// EXPORTING THE JWT GENERATOR
module.exports = { JWTCreater, JWTVerifier }
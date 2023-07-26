// IMPORTING NECESSARY MODULES
const mongoose = require('mongoose')

// INSTANTIATING A SCHEMA FROM MONGOOSE
const Schema = mongoose.Schema

// CREATING A USER SCHEMA
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "You must provide a username"]
    },

    email: {
        type: String,
        required: [true, "You must provide an email"],
        unique: [true, "This email is already in use"]
    },

    password: {
        type: String,
        required: [true, "You must provide a password"],
        minLength: [5, "Your password must have a minimum of 5 characters"]
    }
})

// EXPORTING USERSCHEMA
module.exports = mongoose.model("User", UserSchema)
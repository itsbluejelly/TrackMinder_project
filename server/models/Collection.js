// IMPORT NECESSARY MODULES
const mongoose = require('mongoose')

// INSTANTIATING A SCHEMA FROM MONGOOSE
const Schema = mongoose.Schema

// CREATING A COLLECTION SCHEMA
const CollectionSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, "Your collection must have a name"]
        },

        description: {type: String},
        
        userID: {
            type: String,
            required: [true, "Your collection must have a userID"]
        },

        hidden: {
            type: Boolean,
            required: [true, "Your collection must have a hidden property"]
        }
    }, 
    
    { timestamps: true }
)

// EXPORTING A COLLECTION MODEL
module.exports = mongoose.model("Collection", CollectionSchema)

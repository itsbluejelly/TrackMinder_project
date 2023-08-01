// IMPORTING NECESSARY MODULES
const mongoose = require('mongoose')

// INSTANTIATE A MONGOOSE SCHEMA
const Schema = mongoose.Schema

// DEFINING AN TASK SCHEMA
const TaskSchema = new Schema({
    activity: {
        type: String,
        required: [true, "Your task must have an activity"]
    },

    deadline: { type: Date },
    
    collectionID: {
        type: String,
        required: [true, "Your task must have a collectionID"]
    },
    
    userID: {
        type: String,
        required: [true, "Your task must have a userID"]
    } 
}, { timestamps: true })

// EXPORING THE TASK MODEL
module.exports = mongoose.model("Task", TaskSchema)
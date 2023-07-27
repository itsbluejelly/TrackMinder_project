// IMPORTING NECESSARY MODULES
const mongoose = require('mongoose')

// INSTANTIATE A MONGOOSE SCHEMA
const Schema = mongoose.Schema

// DEFINING AN TASK SCHEMA
const TaskSchema = new Schema({
    activity: {
        type: String,
        required: [true, "Your task must have an activity"],
        unique: [true, "This activity is already set"]
    },

    deadline: { type: Date },
    
    collectionID: {
        type: String,
        required: [true, "Your task must have a collectionID"]
    }
}, { timestamps: true })

// EXPORING THE TASK MODEL
module.exports = mongoose.model("Task", TaskSchema)
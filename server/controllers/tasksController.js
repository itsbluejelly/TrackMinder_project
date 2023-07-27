// IMPORTING NECESSARY MIDDLEWARES
const mongoose = require('mongoose')
const eventLogger = require('../middleware/eventLogger')
const TaskModel = require('../models/Task')

// A GETCONTROLLER FUNCTION THAT DEALS WITH GET REQUESTS
async function getController(req, res, next){
    const collectionID = req.query.collection

    try{
        const userID = req.storedUser._id

        if(!collectionID){
            throw new Error("Missing collectionID, invalid URL")
        }else if(!mongoose.Types.ObjectId.isValid(collectionID)){
            throw new Error("The collection parameter is invalid")
        }else if(!userID){
            throw new Error("Consider signing up or logging in")
        }

        const foundTasks = await TaskModel
            .find({ collectionID })
            .select("activity deadline createdAt updatedAt")
            
            .sort({
                updatedAt: -1,
                createdAt: -1
            })

        res.status(201).json({
            success: "Tasks fetched successfully",
            data: foundTasks
        })

        eventLogger(`Tasks of collection ${collectionID} found successfully`, foundTasks, "databaseLogs.txt")
    }catch(error){
        if(
            error.message === "Cannot read properties of undefined (reading '_id')" 
                || 
            error.message === "Cannot read properties of null (reading '_id')"
        ){
            res.status(403).json({ error: "Consider signing up or logging in" })
        }else{
            res.status(404).json({ error: error.message })
        }
        
        eventLogger(error.name, error.message, "errorLogs.txt")
    }

    next()
}

// A POSTCONTROLLER FUNCTION THAT DEALS WITH POST REQUESTS
async function postController(req, res, next){
    res.send("Hello World")
    next()
}

// A DELETECONTROLLER FUNCTION THAT DEALS WITH DELETE REQUESTS
async function deleteController(req, res, next){
    res.send("Hello World")
    next()
}

// EXPORTING ALL CONTROLLERS
module.exports = {
    getController,
    postController,
    deleteController
}
// IMPORTING NECESSARY MIDDLEWARE
const mongoose = require('mongoose')
const eventLogger = require('../../middleware/eventLogger')
const TaskModel = require('../../models/Task')

// A DELETECONTROLLER FUNCTION THAT DEALS WITH DELETE REQUESTS
async function deleteController(req, res, next){
    try{
        const userID = req.storedUser._id
        const idParameter = req.params.id

        if(!userID){
            throw new Error("Consider signing up or logging in")
        }else if(!idParameter){
            throw new Error("Missing taskID, invalid URL")
        }else if(!mongoose.Types.ObjectId.isValid(idParameter)){
            throw new Error("The id parameter is invalid")
        }

        const deletedTask = await TaskModel
            .findByIdAndDelete(idParameter)
            .select("activity deadline createdAt updatedAt")

        res.status(200).json({
            success: "Task deleted successfully",
            data: deletedTask
        })

        eventLogger(`Task deleted from collection ${deletedTask.collectionID} successfully`, `Task ID was ${idParameter}`, "databaseLogs.txt")
    }catch(error){
        if(
            error.message === "Cannot read properties of undefined (reading '_id')" 
                || 
            error.message === "Cannot read properties of null (reading '_id')"
        ){
            res.status(403).json({ error: "Consider signing up or logging in"})
        }else{
            res.status(404).json({ error: error.message })
        }

        eventLogger(error.name, error.message, "errorLogs.txt")
    }

    next()
}

// A PATCHCONTROLLER FUNCTION THAT DEALS WITH PATCH REQUESTS
async function patchController(req, res, next){
    res.send("Hello World")
    next()
}

// ECPORTING ALL CONTROLLERS
module.exports = {
    deleteController,
    patchController
}
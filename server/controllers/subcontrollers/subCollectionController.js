// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const mongoose = require('mongoose')
const eventLogger = require('../../middleware/eventLogger')
const CollectionModel = require('../../models/Collection')

// A DELETECONTROLLER FUNCTION THAT DEALS WITH DELETE REQUESTS
async function deleteController(req, res, next){
    const idParameter = req.params.id

    try{
        if(!mongoose.Types.ObjectId.isValid(idParameter)){
            throw new Error("The id parameter is invalid")
        }
        
        const userID = req.storedUser._id
        const deletedCollection = await CollectionModel
            .findByIdAndDelete(idParameter)
            .select("name description updatedAt createdAt")
        
        res.status(200).json({
            success: "Collection deleted successfully",
            data: deletedCollection
        })

        eventLogger(`User ${userID} successfully deleted a collection`, `Collection ID was ${deletedCollection}`, "databaseLogs.txt")
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

// EXPORTING VARIOUS CONTROLLERS
module.exports = {
    deleteController,
    patchController
}

// IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('../middleware/eventLogger')
const CollectionModel = require('../models/Collection')

// A GETCONTROLLER FUNCTION THAT HANDLES GET REQUESTS
async function getController(req, res, next){
    try{
        const userID = req.storedUser._id

        const foundCollections = await CollectionModel
            .find({ userID })
            .sort({ createdAt: -1 })
        
        res.status(200).json({
            success: "Collections fetched successfully",
            data: foundCollections
        })

        eventLogger(`Collections of user ${userID} found successfully`, foundCollections, "databaseLogs.txt")
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

// A POSTCONTROLLER FUNCTION THAT HANDLES POST REQUESTS
async function postController(req, res, next){
    try{
        const userID = req.storedUser._id
        req.body.userID = userID
        const createdCollection = await CollectionModel.create(req.body)
        
        res.status(201).json({
            success: "Collection created successfuly",
            data: createdCollection
        })

        eventLogger(`User ${userID} created collections successfully`, `Collection ID is ${createdCollection._id}`, "databaseLogs.txt")
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

// A DELETECONTROLLER FUNCTION THAT HANDLES DELETE REQUESTS
async function deleteController(req, res, next){
    next()
}

// EXPORTING VARIOUS CONTROLLERS
module.exports = { 
    getController,
    postController,
    deleteController
}

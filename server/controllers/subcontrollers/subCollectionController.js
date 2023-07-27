// IMPORTING NECESSARY MIDDLEWARE AND MODULES
const eventLogger = require('../../middleware/eventLogger')
const CollectionModel = require('../../models/Collection')

// A DELETECONTROLLER FUNCTION THAT DEALS WITH DELETE REQUESTS
async function deleteController(req, res, next){
    res.send("Hello World")
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

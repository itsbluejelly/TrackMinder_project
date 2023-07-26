// IMPORT NECESSARY MIDDLEWARE
const eventLogger = require('../middleware/eventLogger')

// A UNIVERSAL CONTROLLER THAT DEALS WITH ALL REQUESTS
function rootController(req, res, next){
    eventLogger(req.path, req.method, "eventLogs.txt")
    next()
}

// EXPORT THE ROOTCONTROLLER
module.exports = rootController
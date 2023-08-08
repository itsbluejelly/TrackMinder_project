// DEFINING AN OKCONTROLLER THAT HANDLES ALL REQUESTS
function okController(req, res, next){
    res.status(200).send("Successful launch")
    next()
}

// EXPORTING THE OKCONTROLLER
module.exports = okController


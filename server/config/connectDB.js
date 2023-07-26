// IMPORTING NECESSARY MODULES AND MIDDLEWARE
const mongoose = require('mongoose')
const eventLogger = require('../middleware/eventLogger')

// A FUNCTION THAT ALLOWS THE SERVER TO CONNECT TO THE DATABASE
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(error){
        eventLogger(error.name, error.message, "errorLogs.txt")
    }
}

// EXPORTING THE CONNECTDB FUNCTION
module.exports = connectDB
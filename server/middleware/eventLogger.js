// IMPORTING NECESSARY MODULES
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
const {format} = require('date-fns')
const {v4: uuid} = require('uuid')

// CREATING AN EVENTLOGGER FUNCTION THAT CREATES LOGS WHILE LOGGING THEM OUT
async function eventLogger(message1, message2, fileName){
    if(typeof fileName !== "string"){
        throw new TypeError("3rd parameter, fileName, must be a string")
    }

    const dateTime = `${format(new Date(), "do 'of' MMMM yyyy\thh:mm:ss aaaa")}`
    const loggedItem = `${dateTime}\t${uuid()}\t${message1}\t${message2}\n`

    try{
        if(!fs.existsSyn(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), loggedItem, "utf-8")
        console.log(loggedItem)
    }catch(error){
        const errorItem = `${dateTime}\t${uuid()}\t${error.name}\t${error.message}\n`

        try{
            if(!fs.existsSyn(path.join(__dirname, '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
            }
            
            await fsPromises.appendFile(path.join(__dirname, '..', 'logs', "errorLogs.txt"), errorItem, "utf-8")
            console.log(errorItem)
        }catch(secondError){
            console.log(`${dateTime}\t${uuid()}\t${secondError.name}\t${secondError.message}\n`)
        }
    }
}

// EXPORTING THE EVENTLOGGER FUNCTION
module.exports = eventLogger
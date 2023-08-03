// AN ARRAY OF ACCEPTED URLS
const whiteList = ['http://localhost:5173', 'https://itsbluejelly.github.io']

// A FUNCTION THAT VALIDATES THE ACCESSIBLE URLS
function confirmURL(origin, callback){
    if(whiteList.includes(origin)){
        callback(null, true)
    }else{
       callback(new Error("Not Allowed By CORS")) 
    }
}

// AN OBJECT THAT REGULATES WHAT IS ALLOWED TO USE DATA BY CORS
const corsOptions = {
    origin: confirmURL,
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Authorization,Content-Type'
}

// EXPORTING CORSOPTIONS
module.exports = corsOptions
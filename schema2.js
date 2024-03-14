const mongoose=require('mongoose')
const signupschema= new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const signupdetails=mongoose.model('SIGNUPDETAILS',signupschema)
module.exports={signupdetails}
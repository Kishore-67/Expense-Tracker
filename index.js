const {details}=require('./Schema')
const {signupdetails}=require('./schema2')
const mongoose=require('mongoose')
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors())
async function connectdb(){
    try{
        await mongoose.connect('mongodb+srv://kishore762k4:kishore1234@atlas1.j1vhjqd.mongodb.net/LOGINDETAILS?retryWrites=true&w=majority&appName=Atlas1')
    console.log("DB CONNECTED")
    const port=process.env.port || 8000
    app.listen(port,()=>{
    console.log(`listening on port ${port}`)
    })
    }
    catch(error){
        console.log(error)
        console.log("NOT CONNECTED")
    }
}

connectdb()
app.post('/adds',async(request,response)=>{ 
    // console.log(request.body)
    // response.json({
    //     "status":"created"
    // })
   try{
    await details.create({
        "username":request.body.username,
        "password":request.body.password,
    })
    console.log("success")
    response.status(200).json({
        "status":"successful" 
    })
   }
   catch(error){
    console.log(error)
    response.status(404).json({
        "status":"unsuccessful"
    })
   }
})
app.post('/signup',async(request,response)=>{ 
    // console.log(request.body)
    // response.json({
    //     "status":"created"
    // })
   try{
    await signupdetails.create({
        "firstname":request.body.firstname,
        "lastname":request.body.lastname,
        "username":request.body.username,
        "email":request.body.email,
        "password":request.body.password,
    })
    console.log("success")
    response.status(200).json({
        "status":"successful" 
    })
   }
   catch(error){
    console.log(error)
    response.status(404).json({
        "status":"unsuccessful"
    })
   }
})
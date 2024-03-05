const mongoose=require('mongoose')
const express=require('express')
const  { Expense } = require('./Schema.js')
const cors = require('cors')
const bodyparser=require('body-parser')
console.log("INTIALIZING.....")


const app=express()
app.use(bodyparser.json())
app.use(cors())

    async function connectdb(){
        
try{
        await mongoose.connect('mongodb+srv://kishore762k4:kishore1234@atlas1.j1vhjqd.mongodb.net/EXPENSE-TRACKER?retryWrites=true&w=majority&appName=Atlas1')
        console.log("DB CONNECTED")
        // const port=8000
        const port = process.env.PORT || 8000
        app.listen(port,()=>{
        console.log(`listening on port ${port}`)
        })
    }

catch{
    console.log("error raises due to db connection")
}
    }
connectdb()
app.post('/insert-expense',async(request,response)=>{
    // console.log(request.body)
    // response.json({
    //     "status":"created"
    // })
    try{
        console.log(request.body)
    Expense.create(
        {
            "amount":request.body.amount,
            "category":request.body.category,
            "date":request.body.date
            
        }
        
        )
        response.status(200).json({
            "status":"successfull"
        })
    }
    catch(error){
        console.log("ERROR OCCURED !!!")
        response.status(200).json({
            "status":"Unsuccessfull",
            "message":"TRY AGAIN",
            "error":error
        })
    }
})


app.get('/get-expense',async function(request,response){
    try{
        const Expensedata = await Expense.find()
   response.status(200).json(Expensedata)
    }
    catch{
        response.status(200).json({
            "status":"FAILED" ,
            "message":"COULDN'T FETCH THE DATA",
             "error":error   })
    }
    
})
app.delete('/delete-expense/:id',async function(request,response){

            const deletedata = await Expense.findByIdAndDelete(request.params.id)
            if(deletedata){
                console.log(request.params.id)
                response.status(200).json({
                    "status":"deleted"
                })
            }
            else{
                response.status(200).json({
                    "status":"Couldn't delete"
                })
            }
        
})
app.patch('/update/:id',async function(request,response){
    const data = await Expense.findById(request.params.id)
    if(data){
        await data.updateOne({
                "amount":request.body.amount,
                "category":request.body.category,
                "date":request.body.date
        })
        console.log(request.params.id)
                response.status(200).json({
                    "status":"updated",
                    "message":"Data updated in your database"
                })
    }
    else{
        response.status(200).json({
            "status":"Couldn't update"
        })
    }
})

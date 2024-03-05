//git clone <repo url>


//git add .
//git commit -m "msg"
//git push origin main


// const http = require("http")
// http.createServer(function(request,response){
//         //response.writeHead(200,('Content-Type' : 'text/html'))
//         response.write("response from the server")
//         response.end() 

// }).listen(8000);
// console.log("server is running on port")

// const express = require('express')

// const app = express()

// app.get('/',function(request,response){
//         response.send("WELCOME")
// })
 
// app.listen(8000)

// onsole.log("HELLO")
const  bodyParser = require('body-parser')

const express=require('express')

const app = express()
app.get('/',(request,response)=>{
  response.send(("VANAKAM"),)
})
app.get('/name',(request,response)=>{
  // response.send(("JAVA"),)\
  const data = {
    "name" : "kavin"
  }
  response.status(200).json(data)

})

app.post('/login',(request,response)=>{
    if(request.body.username == 'kishore' && (request.body.password) == "justmyname")
    {
      response.status(200).json({
        "status":"valid user"
      })
    }
    else{
      respone.status(200).json({
        "status":"Invalid user"
      })
    }
    
  
})

  // app.post('/createUser',(request,response)
const port = 8000
// app.listen(8000)


app.listen(port,function(){
  console.log(`Listening port $(port)...`)
})

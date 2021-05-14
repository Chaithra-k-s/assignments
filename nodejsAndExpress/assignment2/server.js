const express=require("express");
const bodyParser=require("body-parser");
//const cors=require("cors")
const app=express()
app.use(bodyParser.json)
//app.use(cors())

app.get("/home",(req,res)=>{
res.send("hello world");
})

app.listen(8080,()=>
{
    console.log("running on port 8080");
})
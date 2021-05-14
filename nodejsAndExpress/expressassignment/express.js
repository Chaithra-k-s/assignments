const express=require("express");
var app=express();
var cors=require("cors")
const bodyParser= require("body-parser");
var urlencodedparser=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("happy to get u")
})

app.post("/registered",(req,res)=>{
    res.send(req.body)
})

app.listen(3000)
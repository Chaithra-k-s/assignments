const express=require("express");
const time=require("strftime");
var http=require("http")
const app= express();
const mongoose=require("mongoose");
var bodyParser = require('body-parser');
const name= require("ejs");
const { urlencoded } = require("body-parser");
var urlencodedparser=bodyParser.urlencoded({extended:true})
app.use(bodyParser.json())
app.set("view engine","ejs");
var schema =mongoose.Schema;

app.use("/assests",express.static('assests'));

app.get('/forms',function(req,res){
    res.render(`forms`,{todos:"name"})
})
app.post("/forms",urlencoded,function(req,res){
      res.end(req.url)
})
app.listen(3000);

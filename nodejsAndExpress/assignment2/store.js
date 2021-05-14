const express=require("express");
var app=express();
var mangoose=require("mongoose");
const schema=mangoose.Schema;

var cart=[{name:"apple",price:60},
           {name:"vegetables",price:20},
           {name:"basket",price:150},
           {name:"chips",price:25},
           {name:"dolls",price:500},
           {name:"silk",price:200}];

 const bodyParser= require("body-parser");
 var urlencodedparser=bodyParser.urlencoded({extended:false})
 app.use(bodyParser.json())

 app.set("view engine","ejs");

 app.get("/item",function(req,res){
     res.render("forms",{todos:cart});
 })

 app.use("/assests",express.static('assests'));
// //add item
 app.post("/item",urlencodedparser,function(req,res){
     console.log(req.body);
     cart.push(req.body);
     console.log(cart);
     //res.render("forms",{todos:cart});
 });
// //display single item
 app.get("/item/:name",function(req,res){
     data=cart.filter(function(cart){return cart.name==req.params.name});
     console.log(data);
     res.json(data);
 });
// //update
 app.patch("/item/:name",urlencodedparser,function(req,res){
     data=cart.find(function(cart){return cart.name==req.params.name});
     console.log(data);
     res.render("forms",{todos:data});
 })

// app.delete("/item/remove/:name",function(req,res){
//    res.send("delete request sent")
//     // data=cart.find(function(cart){return cart.name==req.params.name});
//     // console.log(data);
//     // res.render("forms",{todos:data});
// })
app.delete('/', (req, res) => {
    res.send("DELETE Request Called")
  })
app.listen(8080)

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const invent=require("./schema")
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:123@mongodbpractise.bjozc.mongodb.net/inventory?retryWrites=true&w=majority",
()=>console.log("database connected!"));

app.get("/inventory/",(req,res)=>{
    invent.find({}).exec((err,data)=>{
        if (err){
            res.send("error");
        }else{
            console.log(data);
            res.json(data)
        }
    })
})

app.get("/inventory/:id",(req,res)=>{
    invent.findOne({name:req.params.id}).exec((err,data)=>{
        if (err){
            res.send("error");
        }else{
            console.log(data);
            res.json(data)
        }
    })
})
//add one element at a time
app.post("/inventory",(req,res)=>{
    invent.create(req.body).then((item)=>{res.send(item)
    console.log("data added");})
})

//remove all and add one
app.put("/inventory",(req,res)=>{
    invent.deleteMany(Object);
    invent.create(req.body).then((item)=>{res.send(item)
        console.log("data added");})
    })

//update
app.put("/inventory/:id",(req,res)=>{
    invent.findOneAndUpdate({name:req.params.id},{$set:{name:req.body.name}},function(err,newbook){
        if (err) throw err;
        else
        newbook=res.body;
    }).then((item)=>{res.send(item)
    console.log("data modified");})
})
//delete all data
app.delete("/inventory",(req,res)=>{
    invent.deleteMany(Object);
        console.log("data deleted");
    res.send("collected database is deleted")})

 app.delete("/inventory/:id",(req,res)=>{
 invent.findOneAndDelete({name:req.params.id},function(err,newbook){
                if (err) throw err;
                else
                newbook=res.body;
            }).then((item)=>{res.send(item)
            console.log("data deleted");})
        })
var server=app.listen(1234,()=>console.log("lisening from 1234 port"));

module.exports=server;

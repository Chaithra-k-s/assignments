const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:false});
app.set("view engine","ejs");

app.get("/check",function(req,res){
    res.render("check",{data:req.body})
});

app.post("/check",urlencodedParser,function(req,res){
    console.log(req.body);
    let reverse = req.body.key.split('').reverse().join('');
    console.log(reverse);
    res.render("check-response",{data:req.body})
})
app.listen(3377);
const express=require("express");
const time=require("strftime");
var app= express();
app.set("view engine","ejs");

//1
app.get("/home/",function(req,res){
    res.send(`"hello,world!"`)
});
//2
app.get(`/profile/:age`,function(req,res){
    var year=2021-req.params.age;
    res.render(`profile`,{person:year});
})
//4
app.get(`/time/`,function(req,res){
    var date=time(`%Y-%B-%d T .%H:%M:%S.999Z`)
    res.send(date);

});
//3
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server lisening on port ${PORT}`)
});
//5
console.log(process.env.PORT);// should be setup during browser installation

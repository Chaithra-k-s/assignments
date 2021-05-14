const mongoose=require("mongoose");
const { string } = require("yargs");
var schema=mongoose.Schema;
const inventory=new schema({
    name:{
        type:String,
    require:true,
    unique:true},
    quantity:{
        type:Number,
        require:true
    }
})
const invent=mongoose.model("inventory",inventory);
module.exports=invent;
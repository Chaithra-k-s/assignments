const express=require("express");
var app=express();
var cors=require("cors")
const bodyParser= require("body-parser");
var urlencodedparser=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())
app.use(cors())
var data=[
  {
    title: 'CHAITHRA.KS._RESUME-FRESHERS JOB APPLICATION',
    name: 'chaithra',
    contact: '1234567890',
    category: 'Furniture',
    description: 'mobile'
  },
    {
      title: 'chai',
      name: 'chaithra',
      contact: '1234567890',
      category: 'Furniture',
      description: 'abghcskl'
    },
    {
      title: 'CHAITHRA.KS._RESUME-FRESHERS JOB APPLICATION',
      name: 'chaithra',
      contact: '1234567890',
      category: 'Furniture',
      description: 'mobile'
    },
  {
    title: 'CHAITHRA.KS._RESUME-FRESHERS JOB APPLICATION',
    name: 'chaithra',
    contact: '1231231230',
    category: 'Hardware',
    description: 'dfgtadasfds'
  },
    {
      title: 'chai',
      name: 'chaithra',
      contact: '1234567890',
      category: 'Furniture',
      description: 'abghcskl'
    },
    {
      title: 'CHAITHRA.KS._RESUME-FRESHERS JOB APPLICATION',
      name: 'chaithra',
      contact: '1234567890',
      category: 'Furniture',
      description: 'mobile'
    },
    {
      title: 'JOB APPLICATION',
      name: 'chaithra',
      contact: '1231231230',
      category: 'Hardware',
      description: 'abcdefg'
    }
  ];
app.get("/",(req,res)=>{
    res.json(data)
})
// app.post("/registered",(req,res)=>{
//     data.push(req.body)
//     console.log(req.body);
//     console.log(data);
//     //res.status(200).send({"message":"data received"})
// })
app.post("/registered/:id",(req,res)=>{
  items=req.params.id;
  console.log(req.body)
  console.log(items)
  data.push(req.body)
  console.log(req.body);
  console.log(data);
  // //res.status(200).send({"message":"data received"})
})
app.delete("/:item",(req,res)=>{
    items=req.params.item;
    //console.log(data[items]);
    data.splice(items,1);
    // console.log(data[items]);
    // console.log(items);
    //console.log(req.body);
    //console.log(data);
    //res.status(200).send({"message":"data received"})
})

app.patch("/:item",(req,res)=>{
    items=req.params.item;
    data[items]=req.body;
    console.log(req.body);
    console.log(data);
    //res.status(200).send({"message":"data received"})
})
//console.log(data);

app.listen(3000);
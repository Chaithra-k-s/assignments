const express = require('express')
const fs = require('fs')
const app = express()
var http=require("http");

//var portNumber = process.argv[2]
const filename = process.argv[2]
console.log(filename);
console.log(typeof(filename));
console.log(typeof("package.json"));
app.set("view engine","ejs");

app.get('/books', (req, res) => {
  fs.readFile(filename,"utf8",(err, jsondata) => {
    if (err) return res.sendStatus(500);
    res.setHeader("Content-Type","application/json");
    res.json(JSON.parse(jsondata));
  })
})

app.listen(portNumber=8080);
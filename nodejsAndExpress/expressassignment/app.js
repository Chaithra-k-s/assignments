//1
const http=require("http");
const fs=require("fs");
const time=require("strftime");
const stream=require("concat-stream");
const calc=require("./calculator.js");


// // var server=http.createServer(function(req,res){
// //     console.log("request was made: "+ req.url);
// //     res.writeHead(200,{"Content-Type": "text/plain"});
// //     res.end("hello ; i m lisening in port:3000");
// // })
// // server.listen(3000,"127.0.0.1");
// // console.log("sucess i m lisening from port:3000");
// // //2
// // var read=fs.readFile("test.text",'utf8',function(err,data){
// //   console.log(data);// call back function will take the data so it is not passed to read variable. it cant be printed outside using read
// // });
// // console.log(read);//for asynchronous no need of reference variable
// // //3
// // fs.readdir(__dirname,function(err,items){
// //     console.log(items);
// //     for (var i=0;i<items.length;i++){
// //         var Stats=fs.statSync(__filename)
// //         if(Stats.isFile())
// //         console.log(items[i]+" :FILE");  
// //     }
// // })
// //4
// // fs.writeFile("write.text",process.argv[2],"utf8",function(err){
// //    console.log("error: "+err)
// // })
// //5//12
// console.log(time(`%B %d, %Y .%H:%M:%S`));

// //13
// fs.writeFile("write.text",process.argv[2],"utf8",function(err){
//      console.log("hello "+process.argv[2]+" !");
// })
// //11
// fs.readFile("test.text","utf8",function(err,data){
//     console.log(data);
// })
// //10
// data=process.argv[2];
// var n1=data.split(" ");
// console.log(typeof(n1));
// console.log(n1);
// fs.writeFile(n1[0]+".text",data,"utf8",function(err){
//     fs.readFile("write.text","utf8",function(err,data){
//         console.log(data);
//     })
// })
//9
var data=fs.readFileSync("writeMe.text","utf8");
console.log(typeof(data));
console.log(data.split(" "));
//8
var data1=fs.readFileSync("sum.text","utf8");
n1=data1.split(`\r\n`)
let sum1=0
for (let i=0;i<n1.length;i++){

    var v1=parseInt(n1[i]);
    sum1+=v1;
}
    console.log(sum1);
//6
console.log(calc.add(2,3));
console.log(calc.multi(4,5));
//5
var s=fs.readFile("test.text","utf8",function(err,data){
    var a=data.split(" ");
    console.log(a);
    let count=0;
    for (i=0;i<a.length;i++){
            if(a[i]==="chaithra")
            count++;
    }
    console.log(count);
})
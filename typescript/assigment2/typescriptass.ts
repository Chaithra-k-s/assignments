// const previ_no = Symbol("pn");
// const curr_no = Symbol("cn");

// class Fibo {
// constructor(pn, cn) {
// this[previ_no] = pn;
// this[curr_no] = cn;
// }

// next() {
// let pn = this[previ_no];
// let cn = this[curr_no];
// console.log(pn);
// console.log(cn);
// let sum = 0;
// let count = 0;
// count += 2;
// while (count < 10) {
// sum = pn + cn;
// console.log(sum);
// count++;
// pn = cn;
// cn = sum;
// }
// }
// }
// let obj1 = new Fibo(0, 1);
// obj1.next();

// //
// interface printable{
//     radius?:Number;
//     name?:string;
//     Print():any;
//     }
    
//     let circle:printable={
//         Print(){
//             console.log("from circle class");
            
//         }
//     }
//     let employee:printable={
//         Print(){
//             console.log("from employee class");
//         }
//     }
//     let printall=()=>
//     {
//         console.log("print all values");
//         circle.Print();
//         employee.Print();
//     }
//     printall();
// //
// function *nextarm(){
//     const lowNumber = 1;
// const highNumber = 500;
// for (let i = lowNumber; i <= highNumber; i++) {
//     let numberOfDigits = i.toString().length;
//     let sum = 0;
//     let temp = i;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         temp =(temp / 10);
//     }
//     if (i > 1000) {
//         i=0;
//         yield 2;
//         console.log(i);
//     }
//     if (sum == i) {
//         console.log(i);
//     }
// }
// }
// let mygen=nextarm();
// console.log(mygen.next());
// //
// const p1=new Promise((resolve,reject)=>{
//     let value=Math.floor(Math.random()*10+1);
//     resolve(value);
// });
// const p2=new Promise((resolve,reject)=>{
//     let value=Math.floor(Math.random()*10+1);
//     resolve(value);
// });

// Promise.all([p1,p2]).then((results)=>{
//    // const sum=results.reduce((a,b)=>a+b);
//     //console.log(sum);
// })
// let chatting1=new Map();
// chatting1.set("p1","abc");
// chatting1.set("p2","def");
// chatting1.set("p3","ghi");
// let chatting2=new Map();
// chatting2.set("p4","jkl");
// chatting2.set("p5","mno");
// chatting2.set("p6","pqr");
// let chat=new Map();
// let p1,p2,p3,p4,p5,p6;
// chat.set(chatting1,[p1,p2,p3])
// chat.set(chatting2,[p4,p5,p6])
// console.log(chat);
// console.log("size of chat :"+chat.size);
// for (let i of chatting1.values())
// {
//     console.log(i);
    
// }
// for (let i of chatting2.values())
// {
//     console.log(i); 
// }
// for (let i of chatting1.keys())
// {
//     console.log(i);
// }
// console.log("size of chting room :"+chatting1.size);
// for (let i of chatting2.keys())
// {
//     console.log(i); 
// }
// console.log("size of chting room :"+chatting2.size);



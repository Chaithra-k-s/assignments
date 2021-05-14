let names=["tom","ivan","jerry","donald"];
var [n1,n2,n3]=names;
//console.log(n1);
let first={name:n1,length:n1.length};
let second={name:n2,length:n2.length};
let third={name:n3,length:n3.length};
let obj=[first,second,third];
//console.log(obj);
let res=names.map(value=>{return{name:value,len:value.length}});
console.log(res);
//4
let add=( a=10, b=5)=>a+b;
//5
let userFriends=(a,...b)=>{
    console.log(a);
    for(let i in b)console.log(b);
}
//6
let printCapitalNames=(...a)=>{
    console.log(a);
    for (let i in a){
        console.log(a[i].toUpperCase());
    }
}
//6
let synpet={
    name:"chaithra",
    lpno:`js"ashkcsba"1234$687238`,
    lpmodel:`lpnodasjgcab123$675996`
}
let ticket=()=>console.log(synpet);
//7
let check=names.find(e1=>e1===names[2]);
//7
let organization={
    name:"chaithra",
    address:{
        area:"bangalore",
        pincode:560022
    }
}
let or1=Object.assign(organization)
console.log(or1);
or1.name="pavi";
console.log(or1.name);
console.log(organization.address.pincode);
//7
class account{
    constructor(public name="chaithra",public id=789,public balance=5000){}; 
}
class savings extends account{
    constructor(interest,cash_credit){
        super();
        this.balance+=cash_credit;
    }    

}
class current extends account{
    constructor(interest,cash_credit){
        super();
   this.balance+=cash_credit}
}
//let a1=new account("pavithra",456,1000);
let s1=new savings(0.5,5000);
let c1=new current(.1,100000)
console.log(c1);
//console.log(a1);
console.log(s1);
function bal() {
    let balance=c1.balance+s1.balance
    console.log("bank balance: "+balance);   
}
bal();

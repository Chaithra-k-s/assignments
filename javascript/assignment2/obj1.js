class rectangle{
constructor(height,width){
    this.height=height;
    this.width=width;
}
 
}
rectangle.prototype.getArea=function()
{

    console.log(this.height*this.width);
}    

rect1= new rectangle(10,5);
console.log(rect1);
rect1.height=5;
console.log(rect1);
rect1.getArea();
r =new rectangle(4,5);
rectangle.height=50;
r.getArea();
console.log(r);
console.log(rect1);
console.log(rectangle);


document.write("10"%2);
// var firstname;
// var lastname;
// var fullname={firstname, lastname};
// fullname.firstname="chaithra";
// fullname.lastname="k s";
// fullname.mname="kempanahalli";
// class person{
//     constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// }
// c1=new person(eval(fullname));
// console.log(person);
// console.log(fullname);



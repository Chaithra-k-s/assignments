var account = function (number,name1, balance){
    account.number = number;
    account.name = name1;
    account.balance = balance;
  
    account.deposit = function deposit(Amount) {
      currentBalance = account.balance + depositAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
    }
  
    account.withdraw = function withdraw(Amount){
      currentBalance = account.balance - withdrawAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
  
    }
  }
  class saving extends account{
      constructor(issalary){
          super();
      this.issalary=issalary;
  }
}

class current extends account{
    constructor(odlimit){
        super();
    this.odlimit=odlimit;
}
}

current1= new current(123456,"chaithra",345.678,50);
sav1=new saving(23456,"jayashree",34567.74,true);
console.log(current1);
console.log(sav1);
sav1.withdrawAmount(200);

// function person(fname,lname,age,skills,dateofbirth,address,married,profession)
// {
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//     this.skills=skills;
//     this.dateofbirth=dateofbirth;
//     this.address=address;
//     this.married=married;
//     this.profession=profession;
// }

// person1=new person("nikhil","goud",22,["C"],"24/10/1996",{city:"hydrabad",pincode:"521185"},"false","sr analyst");
// person2=new person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst");

// print=function()
// {
//     console.log(person1);
//     console.log(person2);
// }
// ();
// amithab=new person("amithab","bachan",52,["C"],"24/10/1996",{city:"hydrabad",pincode:"521185"},"false","sr analyst");

// abhisheik=new person("abhisheik",amithab.lname,21,"HTML","08/06/1997",amithab.address,"false","jr analyst");

// let Aaradhya=new person("Aaradhya",22,["C"],"24/11/1998",{city:"hydrabad",pincode:"521185"},"false","analyst");
// Aaradhya=Object.seal(Aaradhya);
// Aaradhya=Object.assign(abhisheik)
// print=function()
// {
//     console.log(amithab);
//     console.log(abhisheik);
//     console.log(Aaradhya);
//     console.log("abhisheik.lname : "+ abhisheik.lname);
//     console.log("abhisheik.address : "+ abhisheik.address.city);
// }();


  
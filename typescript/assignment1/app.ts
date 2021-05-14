var Order={
    title:"Dosa", 
    price:"40",
    id:123,
    printOrder:function(){console.log("printorder method");
    },
    getPrice:function(){console.log("getprice method");
    }
}

var ob1= Object.assign(Order);
console.log(Order);
ob1.title="bonda";
ob1.price="20";
console.log(ob1)

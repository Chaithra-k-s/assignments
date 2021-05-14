let n = parseInt(prompt ("Enter A number",0));
var key =document.getElementById("sum");
console.log(key.checked);
 if (key.checked == true){
    var out =sumOfDigitsFrom1ToN(6);
    console.log(out);
}
var key1 =document.getElementById("product");
    if (key1.checked == true)
    {
        var out=ProductOfDigitsFrom1ToN(n);
        console.log(out);
    }
    function sumOfDigitsFrom1ToN(n){
        let result=0;
        for (let x = 1; x <= n; x++) 
            result += x;
           // document.write("Sum of numbers from 1 to "+ n + " is :"+ sumOfDigitsFrom1ToN(n))
        return result;
    }
    function ProductOfDigitsFrom1ToN(n){
        let result = 1;
        for (let x = 1; x <= n; x++)        
            result *= x;
            //document.write("Product of numbers from 1 to "+ n + " is :"+ sumOfDigitsFrom1ToN(n))
        return result;
    }
     document.write(out)   
    document.write("Thank you");

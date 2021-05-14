function sumOfDigitsFrom1ToN(n){
    let result = 0;
    for (let x = 1; x <= n; x++){
        if ( x%3 == 0 || x%5 ==0) 

        result += x;
    }
    return result;
}

let n = parseInt(prompt ("Enter A number",0));
    
document.write("Sum of numbers from 1 to "+ n + " is :"+ sumOfDigitsFrom1ToN(n))
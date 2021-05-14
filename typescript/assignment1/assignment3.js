"use strict";
// var p1 = Promise.resolve(3);
// var p2 = Promise.resolve("you");
// Promise.all([p1,p2]).then(values =>{
//     console.log(values);
// });
// var fibo=(a,b)=>{
//     return a+b;
// }
console.log('Armstrong Numbers:');
function getnextarm() {
    // looping through lowNumber to highNumber
    for (let i = 1;; i++) {
        // converting number to string 
        let numberOfDigits = i.toString().length;
        let sum = 0;
        // create a temporary variable
        let temp = i;
        /* loop through a number to find if
        a number is an Armstrong number */
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            // removing last digit from the number
            temp = (temp / 10); // convert float into integer
        }
        if (sum == i) {
            if (i > 1000) {
                i = 0;
            }
            console.log(i);
        }
    }
}

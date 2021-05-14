"use strict";
var fib = function (a, b) {
    var _current = a + b;
    return {
        current: _current,
        next: function (_current) {
            return fib(a, _current);
        }
    };
};
var generator = fib(2, 3);
console.log(generator.current);
let r1 = generator.current;
console.log(generator.next(r1).current); //1,2
let r2 = generator.next(r1).current;
console.log(generator.next(r2).current); //2,3
let r3 = generator.next(r2).current;
//console.log(generator.next(r3).current);
//2
var getarmnum = function () {
    for (let i = 100; i < 400; i++) {
        let numdigi = i.toString().length;
        console.log(typeof (i));
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let remain = temp % 10;
            sum += remain ** numdigi;
            temp = (temp / 10);
        }
        if (sum == i)
            console.log(i);
    }
};
console.log(getarmnum());
//   var generatorarm = getarmnum(10);
//   console.log(generatorarm.current); 
//   let e1=generatorarm.current;
//   console.log(generatorarm.next(e1).current);
//  let e2=generatorarm.next(e1).current;
//   console.log(generatorarm.next(e2).current);
//   let e3=generatorarm.next(e2).current;
//   console.log(generatorarm.next(e3).current);
//   let e4=generatorarm.next(e3).current
//   console.log(generatorarm.next(e4).current);

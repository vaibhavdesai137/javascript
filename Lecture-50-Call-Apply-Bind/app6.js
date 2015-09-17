
console.log("--------- app6.js ---------");

function multiply (a, b) {
    return a * b;
}

var mulByTwo = multiply.bind(this, 2);
var mulByThree = multiply.bind(this, 3);
var mulByFour = multiply.bind(this, 4);
var mulByFive = multiply.bind(this, 5);

console.log(mulByTwo(2));
console.log(mulByThree(2));
console.log(mulByFour(2));
console.log(mulByFive(2));

// o/p:
// 4
// 6
// 8
// 10

 

console.log("--------- app1.js ---------");

var a = {};

var b = [];

var c = function () {
};

console.log(a.__proto__);

console.log("");
console.log(b.__proto__);
console.log(b.__proto__.__proto__);

console.log("");
console.log(c.__proto__);
console.log(c.__proto__.__proto__);

// o/p:
// Object {}
//
// []
// Object {}
//
// function Empty () {}
// Object {}

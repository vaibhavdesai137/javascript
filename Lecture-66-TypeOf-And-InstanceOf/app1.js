
console.log("--------- app1.js ---------");

var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);
           
// weird, but arrays are objects to be honest
var d = [];
console.log(typeof d);

function Person(name) {
    this.name = name;
}
var e = new Person("John");
console.log(typeof e);
console.log(e instanceof Person);

var z = function () {};
console.log(typeof z);

console.log(typeof undefined);
console.log(typeof null);

// o/p:
// number
// string
// object
// object
// object
// true
// function
// undefined
// object
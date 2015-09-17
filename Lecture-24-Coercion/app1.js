var a = 1 + 2;
var b = "Hello " + "World";
var c = 1 + "2";
var d = hello + " World";

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// o/p:
// 3
// Hello World
// 12
// RefError on hello

// This is bcoz JS coerced the number 1 to a string and applied string concat on it
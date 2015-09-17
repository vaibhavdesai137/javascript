var a = 1;
var b = 2;
var c = 3;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// o/p:
// 3
// 3
// 3

// "=" is right to left associative
// so, b = c gets called first
// and then a = b
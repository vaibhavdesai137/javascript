
console.log("----- app1.js -----");

console.log(1 < 2 < 3);
console.log(3 < 2 < 1);

// o/p:
// true
// true

// Take example 1:
// Both operators are "<", so precedence is same
// "<" is left to right associative
// so first, 1 < 2 = true
// true < 3 
// 1 < 3 (coercion)
// true (just got lucky)

// Take example 2:
// Both operators are "<", so precedence is same
// "<" is left to right associative
// so first, 3 < 2 = false
// false < 1  
// 0 < 1 (coercion)
// true (got the wrong result)

console.log("----- app2.js -----");

console.log(Number(1));
console.log(Number("1"));
console.log(Number("foo"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(false));
console.log(Number(true));

// o/p:
// 1
// 1
// NaN
// NaN
// 0 (why did they decide this?)
// 0
// 1
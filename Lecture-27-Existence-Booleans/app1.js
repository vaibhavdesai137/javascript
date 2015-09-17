
console.log("----- app1.js -----");

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

// o/p:
// false
// false
// false

// We can use this coercion to our advantage
// We can use if(x) to check for existance of a value for x
// The only caveat is if x has a value 0, bcoz Boolean(x) => false
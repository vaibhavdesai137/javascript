
console.log("----- app3.js -----");

console.log(3 == 3);            // true
console.log("3" == 3);          // true
console.log(false == 0);        // true
console.log(null == 0);         // false, wtf, Number(null) gives 0
console.log(null < 1);          // true, wtf, why did the prev one give false          

// Equality operators also use coercion when comparing values if data types are different
// null & undefined always give weird resuts with coercion
// avoid coercion completely
// be explicit wherever possible

console.log("--------- app1.js ---------");

// If we had multiple js files with same var names, we will have conflicts
// JS does not have namespaces to solve this problem
// We can use objects to fix it by creating fake container objects
var greet = "hello";
var greet = "hola";
console.log(greet);
           
var english = {};
var spanish = {};

english.greet = "hello";
spanish.greet ="hola";

console.log(english.greet);
console.log(spanish.greet);

// o/p:
// hola
// hello
// hola
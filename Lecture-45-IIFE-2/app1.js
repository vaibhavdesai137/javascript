
console.log("--------- app1.js ---------");

var greeting = "Hello";
console.log(greeting);

(function (name) {
    var greeting = "Hola";
    console.log(greeting + " " + name);
}("John"));

console.log(greeting);

// o/p:
// Hello
// Hola John
// Hello

// See, the global "greeting" was not changed
// This is bcoz just like other fn calls, IIFE calls also create an ex stack
// Variables within IIFE belong to IIFE and do not impact others
// But what if you wanted to impact global?
// See app2.js

// This is very helpful bcoz if u had multiple files and all of them using same variable names, then using IIFE will not cause those files to jump on each other
// That is why you'll see all frameworks wrap their code around () for the entire file
// Make it safe
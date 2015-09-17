
console.log("--------- app1.js ---------");

// Expression:
// Something that evaluates and may/may not store value in a variable
// Ex: 
// var x = 1 + 2;
// Expression is evaluated and stored in x
// 1 + 2;
// Expression is evaluated but we chose to not store value in a var

// Statement:
// Something that just evaluates but not return value to be stored in a variable
// Ex: if(x === 0) { ... }
// Here, x === 0 is an exp that returns a value
// But the if itself is a statement
// You can't say, var x = if (x===0)
// This is incorrect syntax

// This is a named fn
// During creation phase, the engine sees this and registers it
// just places it in memory
// THIS MAKES IT A FUNCTION STATEMENT
function greet() {
    console.log("Hi");
}

// This is an anon fn
// During creation phase, the engine sees the = operator
// Evaluates it
// Creates an obj (which happens to be a fn)
// Stores the return value in x
// THIS MAKES IT A FUNCTION EXPRESSION
var x = function () {
    console.log("Hi");
}

// Calling named fn
greet();

// Calling anonymous fn
x();
 
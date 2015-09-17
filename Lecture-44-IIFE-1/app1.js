
console.log("--------- app1.js ---------");

// function statement
function greet(name) {
    console.log("Hello " + name);
}
greet("John");

// function expression
var x = function (name) {
    console.log("Hello " + name);
}
x("John");

// All the following are valid statements
// No error
// But these statements dont do anything
// If an object can be written like that, then why not a fn
// A fn is an obj after all
3;
"Hello";
{
    name: "Foo"
}

// This is invalid syntax
// JS sees a new new line with fn keyword so it is expecting it to be a fn statement
// But fn statements need a name
// So JS throws error
// function (name) {
//      console.log(name);
// };

// Valid syntax
// Fooling JS here by wrapping the fn within ()
// When JS sees (), it is expecting an expression inside
// (3+4);
// ("Hello" + " there");
// So, we just pass a fn inside and JS happily evaluates it as an expression

// Here, the function is a fn expression but its not invoked
(function (name) {
    console.log("Hello " + name);
});

// Here, the function is a fn expression and it is invoked without param
// Hello undefined
(function (name) {
    console.log("Hello " + name);
}());

// Here, the function is a fn expression and it is invoked with param
// Hello John
(function (name) {
    console.log("Hello " + name);
}("John"));

// o/p:
//
//

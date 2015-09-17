
console.log("--------- app1.js ---------");

function greet(whatToSay) {
    return function (name) {
        console.log(whatToSay + " " + name);
    }
}

greet("Hello")("John");
               

var x = greet("Hola");

x("Doe");

// o/p:
// Hello John
// Hello John

// In the 2nd call, how does the JS know the value of whatToSay is "Hello"?
// The outer fn ex ctx is already gone
// Suprprised? 
// This is closures
// Read the notes for details and how JS makes this work

// Closing in on variables that the current ex. ctx is supposed to have access to is called CLOSURES
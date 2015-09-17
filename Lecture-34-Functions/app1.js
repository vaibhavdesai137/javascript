
console.log("--------- app1.js ---------");

// a function is just another obj
// a fn can have primitives, objects and funtions like any other obj
// additionally, a fn can have a name (or can be anonymous)
// and fn has a property "code"

// So when you write code for a fn, u are not writing the fn
// U are simply creating a fn object whose "code" property is what you wrote

function greet() {
    console.log("hi");
}

// see, u can attach property to a fn
greet.language = "english";

// prints the code
console.log(greet);

console.log(greet.language);

// REPEAT A MILLION TIMES
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// FUNCTIONS are OBJECTS
// ...
// ...
// FUNCTIONS are OBJECTS
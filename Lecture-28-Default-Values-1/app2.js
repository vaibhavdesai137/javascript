
console.log("--------- app2.js ---------");

function greet(name) {
    name = name || 'guest';
    console.log("Hello " + name);
}

greet("Vaibhav");
greet();
greet(undefined);
greet(null);
greet(false);

// o/p:
// Hello Vaibhav
// Hello guest
// Hello guest
// Hello guest
// Hello guest

// The || operator when provided with 2 different data types gives the operand that can be coerced to true
// undefined || "hello" ---> hello
// null || "hello" ---> hello
// false || "hello" ---> hello
// "" || "hello" ---> hello
// "hi" || "hello" ---> "hi"
// Neat trick to kinda set the default value
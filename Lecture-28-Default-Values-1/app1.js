
console.log("--------- app1.js ---------");

function greet(name) {
    console.log("Hello " + name);
}

greet("Vaibhav");
greet();
greet(undefined);
greet(null);
greet(false);

// o/p:
// Hello Vaibhav
// Hello undefined
// Hello undefined
// Hello null
// Hello false

// JS allows functions to be called without params even though the function expects them
// When the function is invoked, it creates the ex xtc and puts it on the stack
// assigns space for var name but no value if ever set so the default is undefined
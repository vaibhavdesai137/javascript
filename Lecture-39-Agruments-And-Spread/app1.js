
console.log("--------- app1.js ---------");

function greet(fname, lname, language) {
    
    if (arguments.length === 0) {
        console.log("All params missing!");
        console.log('-----------');
        return;
    }
    
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments);
    console.log('-----------');
}

greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "English");
greet("John", "Doe", "English", "bogus");

// o/p:
// -----------
// John
// undefined
// undefined
// ["John"]
// -----------
// John
// Doe
// undefined
// ["John", "Doe"]
// -----------
// John
// Doe
// English
// ["John", "Doe", "English"]
// -----------

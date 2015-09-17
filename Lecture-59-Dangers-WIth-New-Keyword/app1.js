
console.log("--------- app1.js ---------");

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

// Note the "new" keyword missing 
var jane = Person("Jane", "Doe");

console.log(jane.fname);

// o/p:
// undefined

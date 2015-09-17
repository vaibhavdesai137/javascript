
console.log("--------- app1.js ---------");

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

var john = new Person("John");
var jane = new Person("Jane", "Doe");

console.log(john);
console.log(jane);

// o/p:
// Person {fname: "John", lname: undefined}
// Person {fname: "Jane", lname: "Doe"}

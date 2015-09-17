
console.log("--------- app1.js ---------");

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.getFullName = function () {
    return this.fname + " " + this.lname;
}

var john = new Person("John", "Doe");
var jane = new Person("Jane", "Doe");

console.log(john.getFullName());
console.log(jane.getFullName());

Person.prototype.getFormalName = function () {
    return this.lname + ", " + this.fname;
}

console.log(john.getFormalName());
console.log(jane.getFormalName());

// o/p:
// John Doe
// Jane Doe
// Doe, John
// Doe, Jane
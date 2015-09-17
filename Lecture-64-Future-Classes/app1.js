
console.log("--------- app1.js ---------");

// This will not work
// This is how classes will work in the future once JS supports them
class Person {
    
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    
    greet() {
        return "Hi " + this.fname;
    }
};

var john = new Person("John", "Doe");
console.log(john);

// o/p:
// Object {}
// Object {fname: "John", lname: "Doe"}

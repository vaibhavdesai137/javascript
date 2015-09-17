
console.log("--------- app1.js ---------");

var person = {
    fname: "Default",
    lname: "Default",
    greet: function () {
        return "Hi " + this.fname;
    }
};

var john = Object.create(person);
console.log(john);
john.fname = "John";
john.lname = "Doe";
console.log(john);


// o/p:
// Object {}
// Object {fname: "John", lname: "Doe"}

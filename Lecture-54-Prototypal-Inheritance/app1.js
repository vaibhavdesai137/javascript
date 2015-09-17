
console.log("--------- app1.js ---------");

var person = {
    fname: "Default",
    lname: "Default",
    sex: "M",
    getFN: function () {
        return this.fname + " " + this.lname;
    }
}

var john = {
    fname: "John",
    lname: "Doe"
}

var jane = {
    fname: "Jane"
}

// DONT EVER DO THIS
// FOR DEMO ONLY
john.__proto__ = person;
jane.__proto__ = person;

// The "this" pointer is getFN refers to "john" obj since "john" invoked it
console.log(john.getFN());
console.log(jane.getFN());

// o/p:
// Vaibhav Desai
// Vaibhav
// M



console.log("--------- app2.js ---------");

var person1 = {
    
    fname: "Vaibhav",
    lname: "Desai",
    
    getFullName: function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }
};

// BIND 1
var logName1 = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}
var x = logName1.bind(person1);
x();

// BIND 2 using IIFE
(function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}).bind(person1)();


// o/p:
// Logged: Vaibhav Desai
// Logged: Vaibhav Desai

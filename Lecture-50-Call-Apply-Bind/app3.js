
console.log("--------- app3.js ---------");

var person2 = {
    
    fname: "Vaibhav",
    lname: "Desai",
    
    getFullName: function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }
};

// CALL 1
var logName2 = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}
logName2.call(person2, "es", "en");

// CALL 2 using IIFE
(function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}).call(person1, "es", "en");


// o/p:
// Logged: Vaibhav Desai
// Logged: Vaibhav Desai

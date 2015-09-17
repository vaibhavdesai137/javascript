
console.log("--------- app4.js ---------");

var person3 = {
    
    fname: "Vaibhav",
    lname: "Desai",
    
    getFullName: function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }
};

// APPLY 1
var logName3 = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}
logName2.apply(person2, ["es", "en"]);

// APPLY 2 using IIFE
(function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
}).apply(person1, ["es", "en"]);


// o/p:
// Logged: Vaibhav Desai
// Logged: Vaibhav Desai

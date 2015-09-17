
console.log("--------- app1.js ---------");

var person = {
    
    fname: "Vaibhav",
    lname: "Desai",
    
    getFullName: function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }
};

var logName = function (lang1, lang2) {
    console.log("Logged: " + person.getFullName());
}
logName();

// o/p:
// Logged: Vaibhav Desai

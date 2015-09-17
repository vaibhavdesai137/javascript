
console.log("--------- app5.js ---------");

var person10 = {
    
    fname: "Vaibhav",
    lname: "Desai",
    
    getFullName: function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }
};

var person11 = {
    fname: "Vishal",
    lname: "Desai"
};

console.log(person10.getFullName.apply(person11));

// o/p:
// Vishal Desai
 
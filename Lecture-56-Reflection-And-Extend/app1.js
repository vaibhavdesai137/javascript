
console.log("--------- app1.js ---------");

var person = {
    fname: "Default",
    lname: "Default",
    getFN: function () {
        return this.fname + " " + this.lname;
    }
}

var john = {
    fname: "John",
    lname: "Doe"
}

// DONT EVER DO THIS
// FOR DEMO ONLY
john.__proto__ = person;

console.log("");
for (var prop in john) {
    console.log(prop + ": " + john[prop]);
}

console.log(""); 
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

// o/p:
// fname: John
// lname: Doe
// getFN: function () {
//      return this.fname + " " + this.lname;
// }

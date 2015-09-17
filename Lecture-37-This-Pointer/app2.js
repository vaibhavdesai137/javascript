
console.log("--------- app2.js ---------");

var x = {
    fname: "Vaibhav",
    log: function () {
        this.lname = "Desai";
        console.log(this);
    }
};

x.log();
console.log("lname: " + x.lname);

// Note that a function is an object
// An objects can have nested objects
// By thi slogic, an obj can have a fn in it
// That's exactly what x is
// x.log() is known as an OBJECT METHOD

// When x.log() is called, "this" points to x and not global
// Changes made using "this" are reflected in x and not at global scope

// o/p:
// Object {fname: "Vaibhav", lname: "Desai"}
// lname: Desai

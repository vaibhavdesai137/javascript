
console.log("--------- app2.js ---------");

// polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length !== 1) { 
            throw new Error("WTF Man. Just pass 1 param");
        }
        function F() { }
        F.prototype = o;
        return new F();
    }
}

var person1 = {
    fname: "Default",
    lname: "Default",
    greet: function () {
        return "Hi " + this.fname;
    }
};

var john1 = Object.create(person1);
john1.fname = "John";
john1.lname = "Doe";
console.log(john1);


// o/p:
// Object {}
// Object {fname: "John", lname: "Doe"}


console.log("--------- app1.js ---------");

// "{}" same as "new Object()"
// Recommended way
// Faster & easier to write
var person = {
    fname: "Vaibhav", 
    lname: "Desai", 
    address: {
        street: "1000 Main St.", 
        apt: "10A"
    }
};

console.log("fname: " + person.fname);
console.log("lname: " + person.lname);

console.log("street: " + person.address.street);
console.log("street: " + person["address"]["street"]);
console.log("street: " + person["address"].street);
console.log("street: " + person.address["street"]);

console.log(person);

// o/p:
// fname: Vaibhav
// lname: Desai
// fname: Vaibhav
// lname: Desai
// street: 1000 Main St.
// street: 1000 Main St.
// street: 1000 Main St.
// street: 1000 Main St.
// you'll see the person object in console
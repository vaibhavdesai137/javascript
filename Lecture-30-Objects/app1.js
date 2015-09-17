
console.log("--------- app1.js ---------");

var person = new Object();

// This is another operator
// Looks for "fname" property on "person" object
// Creates if does not exist, else overwrites it
person["fname"] = "Vaibhav";
person["lname"] = "Desai";

var fname = "fname";
var lname = "lname";

console.log("fname: " + person[fname]);
console.log("lname: " + person[lname]);

console.log("fname: " + person.fname);
console.log("lname: " + person.lname);

person.address = new Object();
person.address.street = "1000 Main St.";
person.address.apt = "10A";

console.log("street: " + person.address.street);
console.log("street: " + person["address"]["street"]);
console.log("street: " + person["address"].street);
console.log("street: " + person.address["street"]);


// o/p:
// fname: Vaibhav
// lname: Desai
// fname: Vaibhav
// lname: Desai
// street: 1000 Main St.
// street: 1000 Main St.
// street: 1000 Main St.
// street: 1000 Main St.

// . and [] are operators just like prev operators we saw
// . is more readable and easy too
// person.fname is internally treated as person."fname"
// person.address.apt works becoz the dot operator is L-to-R associative
// look for "person" first, then a property or method called "address" and then see if "street" exists
// Create if not, overwrite if it exists

// Doing "new Object()" is not the recommended way
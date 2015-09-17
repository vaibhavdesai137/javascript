
console.log("--------- app1.js ---------");

// By value
// Changes made by one will not impact others
// Bcoz everyone works on their own copy
var a = 3;
var b;
b = a;
console.log("a: " + a);
console.log("b: " + b);
a++;
console.log("a: " + a);
console.log("b: " + b);

// By refrence
// Changes made by one guy will be seen by all
// Bcoz everyone works on shared copy
var c = {greeting: "hi"};
var d;
d = c;
console.log("c: " + c.greeting);
console.log("d: " + d.greeting);
d.greeting = "hello";
console.log("c: " + c.greeting);
console.log("d: " + d.greeting);

// By refrence (even as parameters)
// Changes made by one guy will be seen by all
// Bcoz everyone works on shared copy
function changeGreeting(obj) {
    obj.greeting = "hola";
}
changeGreeting(d);
console.log("c: " + c.greeting);
console.log("d: " + d.greeting);

// o/p:
// a: 3
// b: 3
// a: 4
// b: 3
// c: hi
// d: hi
// c: hello
// d: hello
// c: hola
// d: hola
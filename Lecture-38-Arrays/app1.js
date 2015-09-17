
console.log("--------- app1.js ---------");

var arr1 = new Array();
var arr2 = [];
var arr3 = [1, 2, 3, 4, 5];

var arr4 = [
    1, 
    "hello",
    {
        name: "Vaibhav"
    },
    false,
    function(name) {
        console.log("Hello " + name);
    }
];

console.log(arr4);

// invoking the method
arr4[4](arr4[2].name);

// o/p:
// Array object
// Hello Vaibhav

// Arrays are a collection of anything
// Since JS is dynamically typed, you can have a mix and match of data types
// Since function is an object, an array can hold a function too
// Note that its a fn expression since it will be evaluated when the = opeartor function is invoked

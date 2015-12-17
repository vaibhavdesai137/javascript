
console.log("--------- app1.js ---------");

function logNewPerson() {
    "use strict";
    
    var person2;
    
    // This will throw an error    
    persom2 = {};
    console.log(persom2);
}

// No error here since "strict" is used only for the fn
var person;
persom = {};
console.log(persom);

// Error will be thrown here
logNewPerson();
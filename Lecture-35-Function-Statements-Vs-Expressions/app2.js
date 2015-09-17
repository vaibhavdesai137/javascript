
console.log("--------- app2.js ---------");

xx();

var xx = function () {
    console.log("Hi");
}

// This throws an error
// During creation phase, JS saw x and created mem for it
// set it to undefined
// during ex phase, it saw x() but x is undefined, hence the error
// Remember, the = operator will be executed during the execution phase and not creation phase
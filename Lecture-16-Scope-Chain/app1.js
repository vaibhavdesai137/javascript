
function a() {
    console.log("x in a(): " + x);
    x++;
    console.log("x in a(): " + x);
}

function b() {
    var x = 2;
    console.log("x in b(): " + x);
    a();
}

console.log("app2.js");

var x = 1;
console.log("x in global scope: " + x);
b();
console.log("x in global scope: " + x);

// o/p:
// x in global scope: 1
// x in b(): 2
// x in a(): 1
// x in a(): 2
// x in global scope: 2

// The function a() does not create its own var x. Here, it will happily take the value from the global var x
// This is bcoz the outer env for a() is the global ex ctx.
// Both a() and b() are at the same level in the global scope and thus,
// both of them have their outer env as global scope
// This is what lexical env means. The physical placement of the code in the file
// Any fn can be invoked by any fn but the outer scope is determined by the lexical env
// Any updates made to x in a() will be reflected in the global scope

function a() {
    var x;
    console.log("x in a(): " + x);
    b();
}

function b() {
    var x = 2;
    console.log("x in b(): " + x);
}

var x = 1;
console.log("x in global scope:" + x);
a();
console.log("x in global scope:" + x);

// o/p:
// x in global scope: 1
// x in a(): undefined
// x in b(): 2
// x in global scope: 1

// Even though the same var is created in each function, the ex. ctx for each function maintains its own copy for the variable
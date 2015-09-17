
function b2() {
    
    a2();
    
    function a2() {
        console.log("x2 in a2(): " + x2);
    }
}

console.log("app3.js");

var x2 = 1;
b2();

// o/p:
// x2 in a2(): 1

// a2() outer scope = b2()
// b2() outer scope = global
// x2 could not be found in a2() so it was looked up in b2()
// b2() did not have it so it was looked up in global
// found it so used it
// if not found in global, then RefError
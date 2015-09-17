
function b1() {
    
    var x1 = 2;
    console.log("x1 in b(): " + x1);
    a1();
    
    function a1() {
        console.log("x1 in a(): " + x1);
        x1++;
        console.log("x1 in a(): " + x1);
    }
    console.log("x1 in b1(): " + x1);
}

console.log("app2.js");

var x1 = 1;
console.log("x1 in global scope: " + x1);
b1();
console.log("x1 in global scope: " + x1);

// o/p:
// x in global scope: 1
// x in b(): 2
// x in a(): 2
// x in a(): 3
// x in b(): 3
// x in global scope: 1

// Refer to app1.js
// Here, we are changing the lexical env for a()
// a()'s outer env is now b()
// Also, calling a1() directly from global will not work since global only knows about b()

b2();
console.log(a2);

var a2 = 'Hello World';

function b2() {
    console.log("Called b2");
}

// output:
// Called b2
// undefined

// This is becoz, during execution phase creation, space was assigned for a but it never got a value
// Default value for a var during creation phase is "undefined"
// Same could be true for b for full function definitions are copied in mem during creation phase
// and hence the call to b works fine

// This process of assigning mem for vars and fn is called HOISTING
// It happens during the CREATION PHASE of execution context
// Vars get values assigned when the ex ctx actually runs
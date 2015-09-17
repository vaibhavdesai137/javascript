
b3();
console.log(a3);

function b3() {
    console.log("Called b3");
}

// output:
// Called b3
// Error: a3 is undefined

// This is becoz, during execution phase creation, engine did not find any var called a
// and never created an memory for it, when it was used, the engine did not find it in its 
// ctx and hence gave an error

// This process of assigning mem for vars and fn is called HOISTING
// It happens during the CREATION PHASE of execution context
// Vars get values assigned when the ex ctx actually runs

console.log("--------- app1.js ---------");

function a() {
    console.log(this);
}

var b = function() {
    console.log(this);
    
    // this will be reflected on global scope
    this.newVar = "Foo";
}

a();
b();
console.log(newVar);

// Function a() is a fn statement
// Function a() is a fn expression
// In both the cases, "this" still points to the global object, which is the "Window" object

// o/p:
// Window object
// Window object
// Foo

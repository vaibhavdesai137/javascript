
function a() {
    var x;
    console.log("x: " + x);
    b();
}

function b() {
    var abc = 0;
    var pqr;
    console.log("abc: " + abc);
    console.log("pqr: " + pqr);
}

var d;
a();
console.log("d:" + d);

// go through notes on execution stack
// how the stack is created at every function call
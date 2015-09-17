
console.log("--------- app2.js ---------");

function log(y) {
    y();
}

// A fn is also an obj, so we'll pass a full fn as a parameter
// Just created an anon fn that is referenced by y
// Calling y() calls the fn itself
log(function() {
    console.log("hello");
});


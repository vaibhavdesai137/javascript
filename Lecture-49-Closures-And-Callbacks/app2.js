
console.log("--------- app2.js ---------");

function someFun(callback) {
    
    // Do some work
    var a = 1000;
    var b = 2000;
    
    // This fn is done so call the callback guy
    callback();
}

// Our someFun function expects a fn to be run when finished
// So pass it a fn obj
someFun(function() {
    console.log("I am done");
});

// Our someFun function expects a fn to be run when finished
// So pass it a fn obj
someFun(function() {
    console.log("I am done again");
});

// o/p:
// I am done
// I am done again

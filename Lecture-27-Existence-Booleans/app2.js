
console.log("----- app2.js -----");

var x;

x = undefined;
checkX(x);

x = null;
checkX(x);

x = "";
checkX(x);

x = 0;
checkX(x);
checkXWith0Check(x);

x = " ";
checkX(x);

function checkX(x) {
    if(x) {
        console.log("x has a value");
    } else {
        console.log("x does not have a value");
    }    
}

function checkXWith0Check(x) {
    if(x || x === 0) {
        console.log("x has a value");
    } else {
        console.log("x does not have a value");
    }    
}

// o/p:
// x does not have a value
// x does not have a value
// x does not have a value
// x does not have a value
// x has a value
// x has a value
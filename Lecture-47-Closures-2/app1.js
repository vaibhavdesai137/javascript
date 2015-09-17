
console.log("--------- app1.js ---------");

function buildFcuntions() {
    
    var arr = [];
    
    for(var i =0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    
    return arr;
}

var fs = buildFcuntions();

fs[0]();
fs[1]();
fs[2]();
fs[3]();

// o/p:
// 3
// 3
// 3
// TypeError: fs[3] is not a fn

// Were you expecting to see 0, 1 and 2
// Well, when those individual fn are called, they will all look in their ouet env for "i"
// Remember, there is just one copy of i which was already set to 3 when the outer fn was popped of the ex. stack
// Hence, all of them see the value of i as 3 when the fn is invoked
// Closures babayyyy!!!
// Look at app2.js and app3.js if you do want to see 0, 1 and 2
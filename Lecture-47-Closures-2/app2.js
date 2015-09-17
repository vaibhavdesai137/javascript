
"use strict";

console.log("--------- app2.js ---------");

function buildFcuntions1() {
    
    var arr = [];
    
    for(let i =0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    
    return arr;
}

var fs1 = buildFcuntions1();

fs1[0]();
fs1[1]();
fs1[2]();
fs1[3]();

// o/p:
// 0
// 2
// 2
// TypeError: fs[3] is not a fn

// Read notes for explanations
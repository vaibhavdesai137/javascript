
console.log("--------- app3.js ---------");

function buildFcuntions3() {
    
    var arr = [];
    
    for(var i =0; i < 3; i++) {
        
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
    
    return arr;
}

var fs3 = buildFcuntions3();

fs3[0]();
fs3[1]();
fs3[2]();
fs3[3]();

// o/p:
// 0
// 2
// 2
// TypeError: fs[3] is not a fn

// Wrapped the inner fn in ints own ex. ctx by using IIFE
// This ensures that a new ex. ctx is created every time for the for loop internally
// This ensures the value of j is 0, 1, and 2 in each run
// Fucking complicated to process this example
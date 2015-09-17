
console.log("--------- app1.js ---------");

function sayHiLater() {
    
    var greeting = "Hi";
    
    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// o/p:
// After 3 secs, u'll see Hi in the console

// AHH moment 1
// setTimeout accepts a fn obj as 1st arg
// We pass it a fn and this is possible bcoz fn are objects and objs cane be passed

// AHH moment 1
// The internal function knows the value of "greeting". How???
// CLosures baby

// AHH moment 3
// Even jQuery uses the same concept
// Passes the fn as an arg
//$("#myButton").click(function() {
//    console.log("Button Clicked");
//});


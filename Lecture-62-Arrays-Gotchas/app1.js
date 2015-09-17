
console.log("--------- app1.js ---------");

var arr = ['Vaibhav', 'Vishal', 'Namrata'];

// See, arrays internally are stored as key/value with key being the index
for(var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}

// Someone in some 3rd party library decided to add a new property/fn on Array then your for loop is screwed
Array.prototype.myCoolFeature = "woaahhh";
for(var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}

// Use plain old for loops for arrays
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// o/p:
// 0: Vaibhav
// 1: Vishal
// 2: Namrata
// 
// 0: Vaibhav
// 1: Vishal
// 2: Namrata
// myCoolFeature: woaahhh
//
// Vaibhav
// Vishal
// Namrata

console.log("--------- app1.js ---------");

String.prototype.fooBar = function () {
    return this + " Whatever";
}
var s1 = "yeah";
console.log(s1.fooBar());

Number.prototype.isPositive = function () {
    return this > 0;
}

// This is error
// JS won't convert number to Number obj automatically
// var s2 = 3;
// console.log(s2.isPositive());

// Use Number fn cons explicitly to use methods available on Number.prototype
var s2 = new Number(3);
console.log(s2.isPositive());

// o/p:
// yeah Whatever
// true
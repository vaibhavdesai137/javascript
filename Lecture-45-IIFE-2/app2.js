
console.log("--------- app2.js ---------");

var greeting1 = "Hello";
console.log(greeting1);

(function (global, name) {
    var greeting = "Hola";
    global.greeting1 = greeting;
    console.log(greeting + " " + name);
}(window, "John"));

console.log(greeting1);

// o/p:
// Hello
// Hola John
// Hola

// See, the global "greeting" was changed becoz we passed "window"
// Note that at the global level, "window" is same as "this"
// You can use both
// "window" is better since its explictly saying i am the window



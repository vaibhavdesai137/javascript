
console.log("--------- app1.js ---------");

var a = Number(3);
console.log(a);

var b = new String("test");
console.log(b);
console.log(String.prototype.indexOf("e"));
console.log(b.indexOf("t"));

// Aut0-Boxing to String, this making length fn available
console.log("Foo".length);

// o/p:
// 3
// String {0: "t", 1: "e", 2: "s", 3: "t", length: 4, [[PrimitiveValue]]: "test"}
// -1
// 0
// 3
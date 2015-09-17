
console.log("--------- app2.js ---------");

var o1 = {
    a1: "a1",
    a2: "a2",
    a3: function () {}
}

var o2 = {
    a4: "a4"
}

var o3 = {
    a5: [1, "asd"]
}

var o4 = {};

_.extend(o4, o1, o2, o3);

console.log(o4);

// o/p:
// Object {a1: "a1", a2: "a2", a4: "a4", a5: Array[2]}

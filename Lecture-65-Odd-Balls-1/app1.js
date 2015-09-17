
console.log("--------- app1.js ---------");

// This looks intimidating but all its doing is creating an array of objects
// Be careful when creating such objects
// You may miss commas, semicolons, etc. etc
// Point is don't be initimated when you see such huge initialization objects
var people = [
    {
        fname: "John",
        lname: "Doe",
        addresses: [
            "123 Main St.",
            "456 Main St.",
        ]
    },
    {
        fname: "Jane",
        lname: "Doe",
        addresses: [
            "123 Main St.",
            "456 Main St.",
        ],
        greet: function () {
            return "Hello";
        }
    }
]

console.log(people[0]);
console.log(people[1]);

// o/p:
// Object {fname: "John", lname: "Doe", addresses: Array[2]}
// Object {fname: "Jane", lname: "Doe", addresses: Array[2]}
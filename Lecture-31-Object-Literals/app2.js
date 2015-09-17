
console.log("--------- app2.js ---------");

var Vaibhav = {
    fname: "Vaibhav", 
    lname: "Desai", 
    address: {
        street: "1000 Main St.", 
        apt: "10A"
    }
};

function greet(person) {
    console.log("Hi " + person.fname);
}

// use a pre-defined obj
greet(Vaibhav);

// create a new obj on the fly
greet({fname: "Vishal", lname: "Desai"});

// add property on the fly
Vaibhav.newProp = "aaa";

// This throws an error bcoz Vaibhav.newProp2 returns undefined
// This is bcoz we have not created Vaibhav.newProp2 yet
// Vaibhav.newProp2.prop = "bbb";

// try this instead
Vaibhav.newProp2 = {};
Vaibhav.newProp2.prop = "bbb";

// o/p:
// Hi Vaibhav
// Hi Vishal

// You can create any objects on the fly
// Set any props for that object you like 
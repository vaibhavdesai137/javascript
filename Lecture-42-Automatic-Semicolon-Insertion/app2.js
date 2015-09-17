
console.log("--------- app1.js ---------");

function getPerson() {
    
    return {
        fname: "Vaibhav"
    }
}

var p = getPerson();
console.log(p);

// o/p:
// Object {fname: "Vaibhav"}

// Here, there is an open brace after return so JS engine continues to parse and knows u just started to write an object
// It will keep parsing till the end of object and return correct data

console.log("--------- app1.js ---------");

function getPerson() {
    
    return 
    {
        fname: "Vaibhav"
    }
}

var p = getPerson();
console.log(p);

// o/p:
// undefined

// This is because JS saw return and a new line char so decided to add the semicolon for you
// The function returned at that point and you got screwed
// ADD OUR OWN FUCKING SEMICOLON
// Look at other variation in app2.js
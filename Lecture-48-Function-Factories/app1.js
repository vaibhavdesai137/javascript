
console.log("--------- app1.js ---------");

function greetFactory(lang) {
    
    return function(name) {
        
        if (lang === "en") {
            console.log("Hello " + name);
            return;
        }
        
        if (lang === "es") {
            console.log("Hola " + name);
            return;
        }
        
        console.log("Namaste " + name);
    }
}

var greetDefault = greetFactory();
var greetEnglish = greetFactory("en");
var greetSpanish = greetFactory("es");

greetDefault("Vaibhav");
greetEnglish("John");
greetSpanish("Juan");

// o/p:
// Namaste Vaibhav
// Hello John
// Hola Juan

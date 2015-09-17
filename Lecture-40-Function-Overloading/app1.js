
console.log("--------- app1.js ---------");

function greet(fname, lname, language) {
    
    language = language || "en";
    
    if (language === 'en') {
        console.log('Hello ' + fname + ' ' + lname);
    }
    
    if (language === 'es') {
        console.log('Hola ' + fname + ' ' + lname);
    }
    
}

greet("John", "Doe", "en");
greet("John", "Doe", "es");

// o/p:
// -----------
// Hello John Doe
// Hola John Doe
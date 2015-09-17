
console.log("--------- app2.js ---------");

function greetPerson(fname, lname, language) {
    
    if (language === 'en') {
        console.log('Hello ' + fname + ' ' + lname);
    }
    
    if (language === 'es') {
        console.log('Hola ' + fname + ' ' + lname);
    }
}

function greetEnglish(fname, lname, language) {
    greetPerson(fname, lname, "en");
}

function greetSpanish(fname, lname, language) {
    greetPerson(fname, lname, "es");
}

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");

// o/p:
// -----------
// Hello John Doe
// Hola John Doe
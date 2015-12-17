
console.log("--------- app.js ---------");

// using G$ notation
var g1 = G$("John", "Doe");
console.log(g1);
console.log("Informal: " + g1.informalGreeting());
console.log("Formal: " + g1.formalGreeting());

// chaining
console.log("");
console.log("Chaining demonstration...");
g1.greet(false).greet(true);
console.log("");
console.log("Chaining with lang swap...");
g1.greet(false).setLang("es").greet(false);

console.log("");
console.log("");
console.log("");

// using our lil lib with jquery
$("#loginBtn").click(function() {
    var lang = $("#lang").val();
    var g2 = G$("Vaibhav", "Desai");
    g2.setLang(lang).useJQuery("greetingH1Tag");    
});

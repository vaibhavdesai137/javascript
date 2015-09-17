
console.log("--------- app3.js ---------");

var x1 = {
    fname: "Vaibhav",
    log: function () {
        
        this.fname = "Vaibo";
        
        function updateName(newName) {
            this.fname = newName;
        }
        
        updateName("Vaibhuuu");
    }
};

x1.log();
console.log(x1.fname);
console.log(fname);


// o/p:
// Vaibo        (this is at x1 level)
// Vaibhuuu     (this is global level)


// JS WEIRD ALERT
// You would expect the name to be set to Vaibhuuuu in setName method
// But it won't happend. You'll be surprised to learn that "this" points to global scope and not to x1
// That's how it is. Weird.
// A way to fix this is in app4.js

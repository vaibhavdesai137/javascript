
console.log("--------- app4.js ---------");

var x2 = {
    fname: "Vaibhav",
    log: function () {
        var self = this;
        
        self.fname = "Vaibo";
        
        function updateName(newName) {
            self.fname = newName;
        }
        
        updateName("Vaibhuuu");
    }
};

x2.log();
console.log(x2.fname);
console.log(fname);


// o/p:
// Vaibhuuu
// Vaibhuuu

// "self" is set to "this" which points to c1
// For anything withing that fn, we use self instead of this
// When updateName() is called, its ex ctx is created
// When "self" is accessed, JS won't find it in updateName so it would look for it in the outer env and find it there
// This ensures that whatever we are doing is at the x1 level and not at the global scope
// Sweet trick

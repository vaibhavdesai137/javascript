
console.log("--------- app1.js ---------");

console.log("libraryName: " + libraryName);

// o/p:
// Lib 1

// Lets say we had 3 js files, lib1.js, lib2.js and app.js which are included in this order
// These 3 files DO NOT create their own ex ctx
// All the js files that were included will be kinda copied in one big js file and executed with one global object
// So we need to be carfeul of not overwriting a variable name that was used by someone previously in some other js file

// Lets says lib1 creates a var called libraryName
// Lets says lib2 creates the same var called libraryName
// Now when app.js reads libraryName, it gets the last value set = Lib 2
// This sucks for lib1.js guy becoz someone just fucked him over
// And lib2.js guys should have been nice to check in the global object before creating the var

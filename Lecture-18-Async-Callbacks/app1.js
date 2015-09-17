
function longRunning() {
    var ms = 5000 + new Date().getTime();
    while(new Date() < ms) {
    }
    console.log("finished long running fn");
}

function clickHandler() {
    console.log("Click event");
}

document.addEventListener('click', clickHandler);

longRunning();

console.log("finished global");

// o/p:
// finished long running fn
// finished global
// Click event

// When the page is loading, no matter how many times u click, the event will not be processed
// This is bcoz ex stack is not empty
// JS will look at event queue when ex stack is empty
// Long running functions can block event processing

// Also, we know JS is synchronous
// The reason it cannot process event queue when ex stack is not empty is bcoz
// it can only run one line of code at a time
// So, it may seem that oh JS handles all these events asynchronously but deep down it is just SYNCHRONOUS
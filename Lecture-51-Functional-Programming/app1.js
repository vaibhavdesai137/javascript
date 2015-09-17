
console.log("--------- app1.js ---------");

function mulByTwo(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

function mulByThree(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3);
    }
    return newArr;
}

function mulByFour(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 4);
    }
    return newArr;
}

function isGreaterThan2(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] > 2);
    }
    return newArr;
}

function isEven(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] %2 === 0);
    }
    return newArr;
}

var arr = [1, 2, 3];
console.log(arr);
console.log(mulByTwo(arr));
console.log(mulByThree(arr));
console.log(mulByFour(arr));
console.log(isGreaterThan2(arr));
console.log(isEven(arr));

// o/p:
// [1, 2, 3]
// [2, 4, 6]
// [3, 6, 9]
// [4, 8, 12]
// [false, false, true]
// [false, true, false]

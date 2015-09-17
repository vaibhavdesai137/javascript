
console.log("--------- app2.js ---------");

function map(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr);

var arr2 = map(arr, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = map(arr, function(item) {
    return item * 3;
});
console.log(arr3);

var arr4 = map(arr, function(item) {
    return item * 4;
});
console.log(arr4);

var arr5 = map(arr, function(item) {
    return item > 2;
});
console.log(arr5);

var arr6 = map(arr, function(item) {
    return (item % 2 === 0);
});
console.log(arr6);

// o/p:
// [1, 2, 3]
// [2, 4, 6]
// [3, 6, 9]
// [4, 8, 12]
// [false, false, true]
// [false, true, false]

console.log("--------- app1.js ---------");

// both are valid js objs
var a = {
    foo: "bar"
}
var a = {
    "foo": "bar"
}

// valid json
// {"foo": "bar"}

// invalid json
// {foo: "bar"}

// JSON was dervied from js objs
// JSON is a subset of js objs
// JSON more strict
// All jsons are valid js objs
// All js objs are not necessarily valid jsons

// convert js obj to json
// wraps prop names in quotes
var x1 = {
    fname: "Vaibhav"
}
console.log(JSON.stringify(x1));

// convert json to js obj
var x1 = '{"fname": "XYZ"}';
console.log(JSON.parse(x1));


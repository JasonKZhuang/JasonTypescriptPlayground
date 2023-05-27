"use strict";
let stringArray = ["one", "two", "three", "four", "five", "six"];
let guitars = ["Strat", "les paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "999";
stringArray.push("Jason");
stringArray.unshift("Tom");
guitars.push("abc");
guitars.push(100);
guitars.unshift("Tom");
// stringArray = guitars;
guitars = stringArray;
console.log(guitars);
let anyTypeArray;
let bands = ["BBB"];
// Tuple
let myTuple = ["abc", 123, true];
console.log(myTuple);
// myTuple[8] = 100;
// myTuple[2] = "sdaf";
myTuple[2] = true;
// Mixed
let mixedDataTuple = ["abc", 123, true];
// myTuple = mixedDataTuple;
mixedDataTuple = myTuple;
// Objects
let myObj = {};
console.log(typeof myObj);
myObj = {
    name: "abc",
    age: 123,
};
console.log(myObj);
myObj = bands;
console.log(myObj);
//explicit object with property values
const exampleObj = {
    prop1: "abc",
    prop2: 123,
    prop3: true,
};
// then define a variable of Example type
const exampleObject = {
    prop1: "abc",
    prop2: 123,
    prop3: true,
    prop4: [1984, 5150, "OU812"],
};
//let's use interface to define a type of object in general
let evh = {
    name: "Evh",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
// Functions
// we can use ? to check if the properties' value is null or undefined.
// or we can use if condition to check
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello, ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return;
};
console.log(greetGuitarist(jp));
// Enums
// unlike most typescript features,
// Enums are not a type-level addition to javascript,
// but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U, Grade.A, Grade.B);

"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific type
// using Assertion more practical
const addOrConcat = (a, b, c) => {
    // if add, then add tow numbers
    if (c === "add") {
        return a + b;
    }
    // otherwise return a string concat  a and b
    return "" + a + b;
};
// let myValue: string = addOrConcat(1, 2, "concat");
let myValue1 = addOrConcat(1, 2, "concat");
console.log(myValue1);
// be careful TS sees no problem, but a string is returned
let myValue2 = addOrConcat(1, 2, "concat");
// the dom
const img = document.querySelector("img");
const myImg = document.getElementById("#img");

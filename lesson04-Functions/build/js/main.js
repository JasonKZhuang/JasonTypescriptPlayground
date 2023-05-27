"use strict";
// Literal types
let myName;
let userName;
userName = "Amy";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello World!");
logMsg(add(1, 2));
const subtract = (a, b) => {
    return a - b;
};
logMsg(subtract(1, 2));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(1, 2));
// function with optional parameters
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// function with parameters with default value
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
logMsg("==== function with parameters with default value ====");
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 3));
// the Rest operator (...) for parameter
logMsg("==== function withRest Parameters ====");
const total = (a, ...numbers) => {
    return a * numbers.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 1, 2, 3));
//
const createError = (msg) => {
    throw new Error(msg);
};
// custom type guards
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return "Not a number or string";
};

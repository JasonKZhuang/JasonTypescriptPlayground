type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific type

// using Assertion more practical
const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  // if add, then add tow numbers
  if (c === "add") {
    return a + b;
  }
  // otherwise return a string concat  a and b
  return "" + a + b;
};

// let myValue: string = addOrConcat(1, 2, "concat");
let myValue1: string = addOrConcat(1, 2, "concat") as string;
console.log(myValue1);

// be careful TS sees no problem, but a string is returned
let myValue2: number = addOrConcat(1, 2, "concat") as number;

// the dom
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img");

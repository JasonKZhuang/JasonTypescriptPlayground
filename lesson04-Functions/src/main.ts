// we can use interface to define a type of object
// Type Aliases, but interface will not work
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Guitarist {
  id: stringOrNumber;
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
}

interface Employee {
  id: number;
  name: string;
  dateOfBirth: Date;
  active: boolean;
  address: string;
  phones: string[];
  office: string | number;
}

// Literal types
let myName: "Jason";

let userName: "Jason" | "Peter" | "Amy";
userName = "Amy";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

logMsg("Hello World!");
logMsg(add(1, 2));

const subtract = (a: number, b: number): number => {
  return a - b;
};
logMsg(subtract(1, 2));

// using type to define a function
type mathFunction = (a: number, b: number) => number;

// using interface to define a function
interface mathFunction2 {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(1, 2));

// function with optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

// function with parameters with default value
const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};
logMsg("==== function with parameters with default value ====");
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 3));

// the Rest operator (...) for parameter
logMsg("==== function withRest Parameters ====");
const total = (a: number, ...numbers: number[]): number => {
  return a * numbers.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 1, 2, 3));

//
const createError = (msg: string): Error => {
  throw new Error(msg);
};

// custom type guards
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return "Not a number or string";
};

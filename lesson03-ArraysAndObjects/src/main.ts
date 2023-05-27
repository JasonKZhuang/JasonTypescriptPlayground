let stringArray: string[] = ["one", "two", "three", "four", "five", "six"];

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

let anyTypeArray: any[];
let bands: string[] = ["BBB"];

// Tuple
let myTuple: [string, number, boolean] = ["abc", 123, true];
console.log(myTuple);
// myTuple[8] = 100;
// myTuple[2] = "sdaf";
myTuple[2] = true;

// Mixed
let mixedDataTuple = ["abc", 123, true];
// myTuple = mixedDataTuple;
mixedDataTuple = myTuple;

// Objects
let myObj: object = {};
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

// first give a type of an object
type Example = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: (string | number)[];
};
// then define a variable of Example type
const exampleObject: Example = {
  prop1: "abc",
  prop2: 123,
  prop3: true,
  prop4: [1984, 5150, "OU812"],
};

//Example for Guitarist
type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

// or we can use interface to define a type of object
interface Guitarist2 {
  name: string;
  active: boolean;
  albums: (string | number)[];
}
//let's use interface to define a type of object in general

let evh: Guitarist = {
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
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello, ${guitarist.name?.toUpperCase()}`;
  }
  return;
};

console.log(greetGuitarist(jp));

// Enums
// unlike most typescript features,
// Enums are not a type-level addition to javascript,
// but something added to the language and runtime.
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U, Grade.A, Grade.B);

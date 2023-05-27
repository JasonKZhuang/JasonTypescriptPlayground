let userName: string = "User Name";
let meaningOfLife: number;
let isLoading: boolean = false;
let album1: any;
let album2: string | number;

console.log(userName);
userName = "jason";
userName = "Peter";

meaningOfLife = 100;
isLoading = true;

album1 = "abc";
album2 = 123;

const sum1 = (a: number, b: number) => {
  return a + b;
};

const sum2 = (a: string, b: string) => {
  return a + b;
};

const sum3 = (a: number, b: string) => {
  return a + b;
};

console.log(sum1(100, 200));
console.log(sum2("100", "200"));
console.log(sum3(333, "200"));

let postId: string | number;
let isActive: boolean | number;

let re: RegExp = /\w+/g;

console.log(re.test("jason"));

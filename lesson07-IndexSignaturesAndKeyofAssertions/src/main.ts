// this lesson is to use Index Signature and Keyof Assertion

// Index signature
// interface TransactionObject {
// this is the index signature
// [key: string]: number;
// readonly [key: string]: number;
// }

interface TransactionObject {
  [key: string]: number;
  pizza: number;
  books: number;
  jobs: number;
}

const todaysTransactions: TransactionObject = {
  pizza: 1,
  books: 2,
  jobs: 3,
  others: 4,
};

console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza";
// this is dynamic property, but not working
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObject): number => {
  let total = 0;
  // this is very similar to Java HashMap<key,value>
  // but this dynamic property must be declared as Index signature at the beginning.
  for (let key in transactions) {
    total += transactions[key];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));

// the value can be set read-only, so we cannot set a value to the property
todaysTransactions.pizza = 100;
console.log(todaysTransactions.something); // this will return a undefined

/// =================================================================
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "John Doe",
  GPA: 3.5,
  classes: [100, 200, 300],
};

console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

interface Employee {
  name: string;
  age: number;
  dept?: number[];
}

const staff: Employee = {
  name: "John Doe",
  age: 3.5,
  dept: [100, 200, 300],
};

// this is Keyof Assertion
for (const key in staff) {
  console.log(`${key}: ${staff[key as keyof Employee]}`);
}

Object.keys(staff).map((key) => {
  console.log(staff[key as keyof Employee]);
  // or we can use typeof
  console.log(staff[key as keyof typeof staff]);
});

const logStaffKey = (staff: Employee, key: keyof Employee): void => {
  console.log(`EmployeeKey[${key}]: EmployeeValue[${staff[key]}]`);
};
logStaffKey(staff, "name");
logStaffKey(staff, "age");
logStaffKey(staff, "dept");

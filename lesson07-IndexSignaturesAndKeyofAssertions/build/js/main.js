"use strict";
// this lesson is to use Index Signature and Keyof Assertion
const todaysTransactions = {
    pizza: 1,
    books: 2,
    jobs: 3,
    others: 4,
};
console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);
let prop = "pizza";
// this is dynamic property, but not working
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
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
const student = {
    name: "John Doe",
    GPA: 3.5,
    classes: [100, 200, 300],
};
console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const staff = {
    name: "John Doe",
    age: 3.5,
    dept: [100, 200, 300],
};
// this is Keyof Assertion
for (const key in staff) {
    console.log(`${key}: ${staff[key]}`);
}
Object.keys(staff).map((key) => {
    console.log(staff[key]);
    // or we can use typeof
    console.log(staff[key]);
});
const logStaffKey = (staff, key) => {
    console.log(`EmployeeKey[${key}]: EmployeeValue[${staff[key]}]`);
};
logStaffKey(staff, "name");
logStaffKey(staff, "age");
logStaffKey(staff, "dept");

"use strict";
// basic class
class Employee {
    constructor(id, name, email, age, lang) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.lang = lang;
    }
}
const Peter = new Employee(1, "Peter", "peter@example.com", 30, "English");
//
class Employee2 {
    constructor(id, name, email, lang = "Chinese") {
        this.id = id;
        this.name = name;
        this.email = email;
        this.lang = lang;
        this.id = id;
        this.name = name;
        this.email = email;
        this.lang = lang;
    }
    getId() {
        return `Hello, Employee's ID ${this.id}`;
    }
}
const Jason = new Employee2(1, "Jason", "jason@gmail.com", "Chinese");
console.log(Jason.getId());
// console.log(Jason.age);
// console.log(Jason.lang);
//
class WebDeveloper extends Employee2 {
    constructor(id, name, email, lang, computer) {
        super(id, name, email, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I'm writing ${this.lang}`;
    }
}
const Sara = new WebDeveloper(10, "Sara", "sara@example.com", "Chinese", "Mac");
console.log(Sara.getLang());
// a class implements the interface
class Beatles {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action}ing the ${this.instrument}`;
    }
}
const page = new Beatles("Beatles", "guitar");
console.log(page.play("play"));
/////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("John");
const steve = new Peeps("Steve");
const amy = new Peeps("Amy");
console.log(Peeps.getCount());
console.log(john.id);
console.log(steve.id);
console.log(amy.id);
/////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    // get method is the key word
    get data() {
        return this.dataState;
    }
    // set method
    set data(value) {
        if (Array.isArray(value) && value.every((e) => typeof e === "string")) {
            this.data = value;
            return;
        }
        else {
            throw new Error("data must be an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zeppelin"];
// console.log(myBands.data);
// myBands.data = [...myBands.data, "ZZ Zhuang"];
// console.log(myBands.data);
// myBands.data = ["Van Halen"];
// console.log(myBands.data);

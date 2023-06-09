"use strict";
/// ======== ======== ======== ======== ======== ======== ///
// basic class Employee
/// ======== ======== ======== ======== ======== ======== ///
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
console.log(Peter.name); // "Peter"
/// ======== ======== ======== ======== ======== ======== ///
// basic class  Greeter
/// ======== ======== ======== ======== ======== ======== ///
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
/// ======== ======== ======== ======== ======== ======== ///
//Inheritance feature
/// ======== ======== ======== ======== ======== ======== ///
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
const dog = new Dog("Big Yellow");
dog.bark();
dog.move(10);
dog.bark();
let sam = new Snake("Sammy the Python");
sam.move();
let tom = new Horse("Tommy the Palomino");
tom.move(34);
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
// a class of Band
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
            this.dataState = value;
        }
        else {
            throw new Error("data must be an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zeppelin"];
console.log(myBands.data);
// using triple dots to spread previous values
myBands.data = [...myBands.data, "ZZ Zhuang"];
console.log(myBands.data);
myBands.data = ["Van Haler", "24243"];
console.log(myBands.data);

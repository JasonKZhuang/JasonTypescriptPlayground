// basic class
class Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  lang: string;

  constructor(id: number, name: string, email: string, age: number, lang: string) {
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
  constructor(public readonly id: number, public name: string, private email: string, protected lang: string = "Chinese") {
    this.id = id;
    this.name = name;
    this.email = email;
    this.lang = lang;
  }
  public getId() {
    return `Hello, Employee's ID ${this.id}`;
  }
}

const Jason = new Employee2(1, "Jason", "jason@gmail.com", "Chinese");

console.log(Jason.getId());
// console.log(Jason.age);
// console.log(Jason.lang);

//
class WebDeveloper extends Employee2 {
  constructor(id: number, name: string, email: string, lang: string, public computer: string) {
    super(id, name, email, lang);
    this.computer = computer;
  }
  public getLang() {
    return `I'm writing ${this.lang}`;
  }
}

const Sara = new WebDeveloper(10, "Sara", "sara@example.com", "Chinese", "Mac");
console.log(Sara.getLang());

/////////////////////////////////////////////////////////
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string; // a method
}
// a class implements the interface
class Beatles implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} is ${action}ing the ${this.instrument}`;
  }
}

const page = new Beatles("Beatles", "guitar");
console.log(page.play("play"));

/////////////////////////////////////////////////////////
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const steve = new Peeps("Steve");
const amy = new Peeps("Amy");
console.log(Peeps.getCount());
console.log(john.id);
console.log(steve.id);
console.log(amy.id);

/////////////////////////////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // get method is the key word
  public get data(): string[] {
    return this.dataState;
  }
  // set method
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((e) => typeof e === "string")) {
      this.data = value;
      return;
    } else {
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

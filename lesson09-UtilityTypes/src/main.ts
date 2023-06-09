// Utility Type
// helpful for common types transformations

// Partial Types
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// the update assignment function,
// the second argument is the partial assignment
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {
    ...assign, // spread in
    ...propsToUpdate, // spread operator
  };
};

//one assignment object
const assign1: Assignment = {
  studentId: "CS123",
  title: "Final Project",
  grade: 0,
};

//call the update function
console.log(updateAssignment(assign1, { grade: 75 }));

// call the update function and return a Assignment object
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to the database
  return assign;
};

//define a Readonly Record for Assignment type
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// the property grade is readonly
// assignVerified.grade = 100;

// some of properties are not provided
// recordAssignment(assignGraded);
recordAssignment({ ...assignGraded, verified: true });

// let's see the Record type
// we can use Record for basic types of keys and values
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "John" | "Mike";
type LetterGrades = "A" | "B" | "C" | "D";
interface grade {
  assign1: number;
  assign2: number;
}

// we can use Record for customized types of keys and values
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "D",
  John: "A",
  Mike: "B",
};

// we can use Record for customized types and interface combination
const gradeData: Record<Students, grade> = {
  Sara: { assign1: 48, assign2: 88 },
  John: { assign1: 48, assign2: 88 },
  Mike: { assign1: 48, assign2: 88 },
};

// Pick and Omit
// Pick means that we pick partial properties from the Main Object
// for example: the only studentId and grade are picked from the Assignment Object, and return a new Object
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

// Omit means that we will ignore the Partial Properties from the Main Object
// for example: the only studentId and title are remained from the Assignment Object, and return a new Object
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));

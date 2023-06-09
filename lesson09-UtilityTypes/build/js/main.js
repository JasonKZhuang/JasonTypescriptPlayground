"use strict";
// Utility Type
// helpful for common types transformations
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// the update assignment function,
// the second argument is the partial assignment
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
//one assignment object
const assign1 = {
    studentId: "CS123",
    title: "Final Project",
    grade: 0,
};
//call the update function
console.log(updateAssignment(assign1, { grade: 75 }));
// call the update function and return a Assignment object
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// required and readonly
const recordAssignment = (assign) => {
    // send to the database
    return assign;
};
//define a Readonly Record for Assignment type
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// the property grade is readonly
// assignVerified.grade = 100;
// some of properties are not provided
// recordAssignment(assignGraded);
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// let's see the Record type
// we can use Record for basic types of keys and values
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
// we can use Record for customized types of keys and values
const finalGrades = {
    Sara: "D",
    John: "A",
    Mike: "B",
};
// we can use Record for customized types and interface combination
const gradeData = {
    Sara: { assign1: 48, assign2: 88 },
    John: { assign1: 48, assign2: 88 },
    Mike: { assign1: 48, assign2: 88 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType
//type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));

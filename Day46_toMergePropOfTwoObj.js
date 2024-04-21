// using Object.assign() Method

// Object 1
const person = {
    name : 'rahul',
    age : 25,
}

// object2
const student = {
    id: 1,
    class: 'btech'
};

const mergeObj = Object.assign(person,student);

console.log(mergeObj);
console.log(mergeObj.name,mergeObj.id);

// // Using Spread Operator

// // Object 1
// const person = {
//     name : 'rahul',
//     age : 25,
// }

// // object2
// const student = {
//     id: 1,
//     class: 'btech'
// };

// const mergeObj = {...person,...student};

// console.log(mergeObj);
// console.log(mergeObj.name,mergeObj.id);
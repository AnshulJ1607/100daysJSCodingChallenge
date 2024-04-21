// Clone the Object using Object.assign()

// const person = {
//     name: 'anshul',
//     age:25,
// }
// // cloning the object
// const clonePerson = Object.assign({},person);
// // {} --- Here The empty {} as the first argument ensures that you don't change the original object.
// console.log(clonePerson);

// clonePerson.name = 'rahul';

// console.log(clonePerson.name);
// console.log(person.name);


// Second Method
// Clone the object using spread Syntax

const person = {
    name: 'anshul',
    age:25,
     // the inner objects will change in the shallow copy
     marks: { math: 66, english: 73}
}
// cloning the object
const clonePerson = {...person};

console.log(clonePerson);

clonePerson.marks.math = 100;

console.log(clonePerson.marks.math);
console.log(person.marks.math);  //100
// Here, when the inner object value math is changed to 100 of clonePerson object, the value of the math key of the person object also changes.

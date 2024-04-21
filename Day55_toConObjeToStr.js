// JavaScript Program to Convert Objects to Strings


const person = {
    name : 'Ansh',
    id : 1,
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result2);
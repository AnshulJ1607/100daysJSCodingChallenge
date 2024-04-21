// // Loop through object using for...in

// const student = {
//     name:'anshul',
//     age:25,
//     hobbies:['reading','games','coding']

// };
// // using for...in
// for(let key in student){
//     let value;
//     //  get the value
//     value=student[key];

//     console.log(key + " - " + value);
// }

// Loop Through Object Using Object.entries and for...of



const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
    console.log(key + " - " +  value);
}

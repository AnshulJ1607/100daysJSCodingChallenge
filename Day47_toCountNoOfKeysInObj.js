// Using for...in loop

const player = {
    name: 'Ms-Dhoni',
    game: 'Cricket',
    runs:50000,
}
let count =0;

for(let key in player){
    count++
}

console.log(count);

// Using Object.keys()

const student = {
    id:10,
    name:'Anshul',
    stream:'ECE',
    college:'Piet'

}

let result = Object.keys(student).length;

console.log(result);
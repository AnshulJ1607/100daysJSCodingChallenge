const prompt =require("prompt-sync")();
// take input
const word = prompt("Enter a sentence:");
// converting to an array
let spli=word.split(" ");
console.log(spli);
//  sort the array elements
let arranged = spli.sort();
console.log(arranged)
let compeleteSentence = arranged.join(' ');
console.log(compeleteSentence);
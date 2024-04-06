const prompt =require("prompt-sync")();

const char = prompt("Enter the character:");
const str = char.charCodeAt();
console.log(str);
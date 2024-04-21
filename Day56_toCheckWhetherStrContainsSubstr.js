// JavaScript Program to Check Whether a String Contains a Substring

const prompt = require('prompt-sync')();

const str = prompt('Enter a string: ');
const checkStr =prompt("Enter the substring you want to check: ");

if(str.includes(checkStr)){
    console.log(`The String Contains ${checkStr}`);
}else {
    console.log(`The String does not Contain ${checkStr}`);
}
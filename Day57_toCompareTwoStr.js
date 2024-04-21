// JavaScript Program to Check Whether a String Contains a Substring

const str1 = 'JavaScript Program';
const str2 = 'javascript program';

const result = str1.toUpperCase() === str2.toUpperCase();

if(result){
    console.log('They are similar');
}else{
    console.log('They are not similar');
}
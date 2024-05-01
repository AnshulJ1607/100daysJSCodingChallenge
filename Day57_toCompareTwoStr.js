// JavaScript Program to Compare Two Strings


const str1 = 'JavaScript Program';
const str2 = 'javascript program';

const result = str1.toUpperCase() === str2.toUpperCase();

if(result){
    console.log('They are similar');
}else{
    console.log('They are not similar');
}
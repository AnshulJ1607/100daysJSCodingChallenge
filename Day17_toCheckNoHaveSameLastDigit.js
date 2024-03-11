const prompt=require("prompt-sync")()

//take input
const a = prompt("Enter the First Number: ");
const b = prompt("Enter the Second  Number: ");
const c = prompt("Enter the Third Number: ");

//find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

//Compare the Last Digit
if(result1==result2 && result1==result3){
    console.log(`${a},${b},${c} have the same last digit.`);
}
else{
    console.log(`${a},${b},${c} have different last digit.`);
}

//output
/*Enter the First Number: 41
Enter the Second  Number: 91
Enter the Third Number: 21
41,91,21 have the same last digit.*/
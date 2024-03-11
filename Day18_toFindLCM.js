const prompt=require("prompt-sync")()

const num1 = prompt("Enter a first positive integer: ");
const num2 = prompt("Enter a second positive integer: ");
let max= (num1>num2)?num1:num2;
let lcm = max;

while(true){
    if(lcm%num1==0 && lcm%num2==0){
        break;
    }
    lcm++;
}

console.log("LCM is: ",lcm);
// JavaScript Program to convert decimal to binary
// const prompt=require("prompt-sync")()

// function convertToBinary(x) {
//     let bi = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//        // console.log(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient ${parseInt(x/2)}`);
//         x = parseInt(x / 2);
//         bi = bi + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bi}`);
// }

// const num = prompt('Enter a decimal number: ');

// convertToBinary(num);

/*
Initialization:

bi (binary representation) is initialized to 0.
rem (remainder), i (incrementer), and step are initialized to 1.
While Loop Iterations:

Iteration 1:
x (initially 13) is not 0, so the loop continues.
rem = 13 % 2 = 1.
x = parseInt(13 / 2) = 6.
bi = 0 + 1 * 1 = 1.
i is updated to 10.
step is incremented to 2.
Iteration 2:
x = 6 is not 0, so the loop continues.
rem = 6 % 2 = 0.
x = parseInt(6 / 2) = 3.
bi = 1 + 0 * 10 = 1.
i is updated to 100.
step is incremented to 3.
Iteration 3:
x = 3 is not 0, so the loop continues.
rem = 3 % 2 = 1.
x = parseInt(3 / 2) = 1.
bi = 10 + 1 * 100 = 101.
i is updated to 1000.
step is incremented to 4.
Iteration 4:
x = 1 is not 0, so the loop continues.
rem = 1 % 2 = 1.
x = parseInt(1 / 2) = 0.
bi = 1010 + 1 * 1000 = 1010.
i is updated to 10000.
step is incremented to 5.
Iteration 5:
x = 0, so the loop stops.
Result:

The binary representation of 13 is 1010.
Print:

The program prints Binary: 1010.
So, the decimal number 13 is converted to the binary number 1010 by the program.

*/
function decimalToBinary(decimal) {
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary || '0';
}
console.log(decimalToBinary(25));
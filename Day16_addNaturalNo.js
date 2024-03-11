// S program to find sum of first n natural numbers

function findSum(n){
    let sum = 0;
    for(let i = 1; i<=n;i++)
        sum =sum + i;
        return sum;
    }
    


// const n =10;
console.log(findSum(10));
console.log(findSum(5));
console.log(findSum(8));
function checkPositiveNegativeZero (n) {
    if(n>0){
        console.log(`The given number ${n} is a positive  no .`);
    }else if(n==0){
        console.log(`The given number ${n} is a equal to zero. ` );
    }else if(n<0){
        console.log(`The given number ${n} is a negative  no. ` );
    }
}

checkPositiveNegativeZero(-10);
checkPositiveNegativeZero(-4);
checkPositiveNegativeZero(0);
checkPositiveNegativeZero(25);
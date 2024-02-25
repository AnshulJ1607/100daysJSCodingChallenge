let number ,res,i;

function toCheckWhetherPrimeOrNot (number) {
    if(number==1){
        console.log(`${number} is not a prime nor composite number`);
    }else if(number<1){
        console.log(`${number} is not prime number`);
    }else {
        for(i=2;i<number;i++){
            if(number%i ==0){
                res = `${number} is not a prime number`;
                break;
            }else{
                res = `${number} is a prime number`
            }
        }
        console.log(res);
    }
}

toCheckWhetherPrimeOrNot(15);
toCheckWhetherPrimeOrNot(-3);
toCheckWhetherPrimeOrNot(7);
toCheckWhetherPrimeOrNot(1);
toCheckWhetherPrimeOrNot(11);
toCheckWhetherPrimeOrNot(13);
toCheckWhetherPrimeOrNot(16);
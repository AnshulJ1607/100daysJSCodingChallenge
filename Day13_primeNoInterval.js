function checkPrimeNumber(number){
    if(number<=1){
        return false;
    }
    for(let i=2;i<=number;i++){
        if(number % i === 0){
            return false;
        }
        return true;
    }
    
}

function primeInterval(start,end){
    for(let i=start;i<=end;i++){
        if(checkPrimeNumber(i)){
            console.log(i);
        }
    }
}


primeInterval(10,20);


const multiply = (num,range) =>{
    for(let i=1;i<=range;i++){
        const result = i*num;
        console.log(`${num}*${i}=${result}`)
    }
}

multiply(8,50);
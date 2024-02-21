function searchLargest(n1,n2,n3){
    if(n1>=n2 && n1>=n3){
        return n1;
    }else if(n2>=n1 && n2>=n3){
        return n2;
    }else if(n3>=n1 && n3>=n2){
        return n3;
    }
}

let result =searchLargest(10,6,7);
console.log(result);
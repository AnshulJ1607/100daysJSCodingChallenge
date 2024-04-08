const prompt =require("prompt-sync")();

function chekStr(str){
    if(str.startsWith('A')&&(str.endsWith('L'))){
        console.log(("The String starts  with A and ends with L"))
    }
    else if(str.startsWith('A')){
        console.log('The String starts  with A')
    }
   
    else if(str.endsWith('L')){
        console.log('The String ends  with L')
    }
    else {
        console.log("The String does not starts  with A and ends with L")
    }
}

const string = prompt("Enter a string:");
chekStr(string);
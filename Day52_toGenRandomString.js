// declare all characters

const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';

function genString(number){
    let result = ' ';
    const charLength = characters.length;
    for(let i=0 ; i<number ;i++){
        result = result + characters.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
console.log(genString(4));


// Using Built-in Methods

const res = Math.random().toString(36).substring(2,7);
console.log(res);
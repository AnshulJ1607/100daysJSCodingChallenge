// const food = {
//     id:1,
//     name : 'apple',
//     color: 'red',
//     shape: 'round',
// }

// const hasKey= 'name' in food;
// if(hasKey){
//     console.log("The key exist")
// }
// else{
//     console.log("The key Doesn't exist")
// }

// Check if Key Exists in Object Using hasOwnProperty()

const food = {
    id:1,
    name : 'apple',
    color: 'red',
    shape: 'round',
}

const hasKey= food.hasOwnProperty('id');
if(hasKey){
    console.log("The key exist")
}
else{
    console.log("The key Doesn't exist")
}

function celsiusToFarenh(c){
    let result = (F=9/5*(c)+32);
    return (`The conversion of ${c} celsius is ${result} fahrenheit`);
}

console.log(celsiusToFarenh(5));
console.log(celsiusToFarenh(15));
console.log(celsiusToFarenh(20));
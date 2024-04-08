// Using Object literal

const car={
    name:"RollsRoyce",
    color:["white","red","black"],
    model:{
        red :2024,
        white :2023
    }
}

console.log(typeof car);
console.log(car.name);
console.log(car.color[2]);
console.log(car.model.white);

// Constructor function
/*
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

const anotherPerson = new Person("Jane Doe", 25, "Web Developer");

console.log(anotherPerson);
*/

// ES6 class

/*
class Employee {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}

const employee = new Employee("Peter Parker", 20, "Web Developer");
console.log(employee);
*/



// Object.create()

/*
const animal = Object.create({
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  },
});

animal.displayType(); // Outputs: "Invertebrates"
*/
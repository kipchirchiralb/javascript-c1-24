const animal = {
  name: "Dog",
  weight: 15,
  units: "kg",
  sound: function producingSound() {
    console.log("The animal is producing some sound");
  },
};

animal.sound();
animal.hasOwnProperty("units");

const donkey = Object.create(animal);
donkey.name = "Donkey";
donkey.age = 78;
console.log(donkey);
console.log(donkey.sound());
console.log(donkey.weight);
let newVar = donkey.hasOwnProperty("age");
console.log(newVar); //ture

// donkey -> animal -> Object(global)

const person = new Object();
person.name = "John Doe";
person.age = 90;
person.speak = function speaking() {
  console.log("A person speaking");
};
console.log(typeof person);
console.log(typeof animal);
console.log(person);
console.log(animal);

const colors = ["yellow", "red"];
const numbers = new Array(2);
numbers[0] = 45;
numbers[1] = 90;
// const numbers = [45,90]
console.log(colors);
console.log(numbers);

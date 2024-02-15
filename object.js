//  a js object - a data type used to store collections of data and functionality.
// we can create objects using(object literals) {} , Object() constructor function or using Object.create() method
const user = {
  name: "albert",
  age: 28,
  isKenyan: true,
  likesCars: false,
  height: 5.9,
  role: "Instructor",
  skills: ["coding", "public speaking", "dancing", "eating"],
  favColor: "green",
  favDrink: null,
  "fav place": "nakuru",
  favPlace: null,
  calculateAge: function getAge(yob) {
    let age = 2024 - yob;
    console.log(" Albert is " + age + " years old");
  },
};

let fullName = "jlhnsjvns";

// accessing values stored in an object
// using the dot notation
console.log(user.height);
console.log(typeof user);
console.log(typeof user.isKenyan); // boolean
user.calculateAge(2003)
// a funtion inside an object is called a method for that object

// using bracket notation
console.log(user["favColor"]);
console.log(user["fav place"]); // nakuru

// json(Javascript Object Notation) global data exchange format -- use by APIs and other sysytems in communication

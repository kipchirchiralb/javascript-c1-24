// variables are a way for our program to store data needed to run effectively

// with js there are 3 ways to store variable :- using the var,let or const keywords with an assignment operator

var age = 40;

let username = "Albert Kipchirchir";

const height = 6;
const unit = "foot";

username = "Albert";
// height = 6.5;
age = 90;
console.log(username + " is " + height + unit + " tall" + age);

// let and const were introduced in es6(2015) -- let and const are block scoped(you can only access their values in the block{} they have been defined in)

{
  var varone = 80;
  let vartwo = 90;
  const varthree = 100;
}

console.log(varthree + "units");
console.log(varone + "units");
console.log(vartwo + "units");

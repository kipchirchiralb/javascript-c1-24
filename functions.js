// a function is a reusable block of code
// defining a function -- with no arguments
function whatItDoes() {
  // the code to run
  let age = 90;
  console.log(age / 3); // 30
}
// defining a function -- with  argument/arguments(data:- array,string,number,boolean, function )
function getAge(yob) {
  let age = 2024 - yob;
  console.log("You are " + age + " years old");
}
function squareNumber(x, user) {
  console.log("hello " + user);
  console.log("The square of " + x + " is " + x * x);
  // return keyword is used to indicate the result of a functions's operations
  return x * x;
}
// invoke/call the function
let result1 = squareNumber(4, "john");
let result2 = squareNumber(93, "nancy");
console.log(result2);

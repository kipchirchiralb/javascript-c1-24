if (10 > 90) {
  console.log("condition true");
} else {
  console.log("condition false");
}

// not !

if (!true) {
  console.log("its true");
} else {
  console.log("its not true(false)");
}

function greet() {
  console.log("Hello!");
}

console.log(greet.toString()); // Outputs the string representation of the function
console.log("**");
console.log(greet.call()); // Outputs the string representation of the function

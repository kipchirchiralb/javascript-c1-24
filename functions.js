// a function is a reusable block of code
// defining a function

function whatItDoes() {
  // the code to run
  let age = 90;
  console.log(age / 3); // 30
}

function getAge(yob) {
  let age = 2024 - yob;
  console.log("You are " + age + " years old");
}
whatItDoes();
whatItDoes();
whatItDoes();
getAge(1999);
getAge(2009);
getAge(2009);
getAge(2009);

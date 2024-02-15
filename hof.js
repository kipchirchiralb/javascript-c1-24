//  A higher order function takes another function as an argument and/or returns a function

function one() {
  console.log("Runninng function one");
}

function two(cbf) {
  console.log("Runninng function two--- alot of calcs ==20s");
  cbf();
}
two(one);

//  assync -- run intensive operations -- .then syntax , async ..await (Promises)

// the function that is passed into aother function as an argument is called a callback function

//callback hell
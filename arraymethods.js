const numbers = [1, 2, 5, 6, 87];
let ans = numbers.includes(8);
numbers.push(900);
console.log(numbers);
console.log(ans);

// Map  Method -- hof -- need a function to execute for every element in the array

let resultArray = numbers.map(ourFunc);

function ourFunc(x) {
  return x * 2;
}

console.log(resultArray);
// console.log(ourFunc(505));

const students = [
  "Chelsea",
  "Karen",
  "Naomi",
  "Frankline",
  "Immanuel",
  "Scott",
  "Albert",
  "Collins",
  "Noel",
];

const filteredList = students.filter(patternFunc);

function patternFunc(sname) {
  if (sname.charAt(0) == "c") {
    return true;
  } else {
    return false;
  }
}

console.log(filteredList);

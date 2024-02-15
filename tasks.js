// 1. Given an array of numbers, write a function that finds the maximum number in the array

let numbersArray = [90, "ghjl", 708, 8, 101, 89, 90, 79, 9, 890];

function max_num_in_array(arr) {
  let largestNumber = arr[0];
  for (index = 0; index < arr.length; index = index + 1) {
    let currentNumber = arr[index];
    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
    // console.log(currentNumber);
  }
  console.log("Largest number is: " + largestNumber);
  return largestNumber;
}
// recursion
max_num_in_array(numbersArray);
// index++ (   index = index+1 )
// ++index vs index++
// error handling

// pascal Notaton ,camelCase Notation, kebab case, snake case ---conventions
//variabe naming rules

//2. Given an array of strings, write a function that removes duplicates and returns a new array containing only the unique strings.

let namesArray = [
  "albert",
  "chelsea",
  "albert",
  "naomi",
  "scott",
  "scott",
  "peter",
  "karen",
  "chelsea",
  "scott",
];
//  expected output - ["albert", "chelsea","naomi","scott","peter","karen"]

function removeDuplicates(arr) {
  let cleanList = [];
  for (i = 0; i < arr.length; i = i + 1) {
    let currName = arr[i];
    if (!cleanList.includes(currName)) {
      cleanList.push(currName);
    }
    // console.log(cleanList);
  }
  console.log(cleanList);
  return cleanList;
}
removeDuplicates(namesArray);
removeDuplicates(["albert", "Albert"]);
// 3. Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.

// 4. Longest word in a string: Write a function that takes a sentence as an argument and returns the longest word in the sentence. You can use string methods such as split(), and length to accomplish this task.

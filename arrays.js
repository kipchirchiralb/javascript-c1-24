// an array is a list of related data
// an array is a special object with values and no keys. however by default an array is zero indexed(elements in the array can be accessed using their indexes which are numbers starting from zero for the first element of the array to n-1 for the last element of the array where n is the number of elements in the array)
//elements in an array are separated by a comma.

const numbers = [
  3222,
  545,
  6,
  24,
  24,
  24222,
  24,
  22,
  2,
  { name: "alber", age: 90 },
]; // n= 10

// first element
console.log(numbers[0]); //3222
//second element
console.log(numbers[1]); // 545
//last element
console.log(numbers[9].name); //  object

// array methods -- these are functions provided by javascript that allow us to manipulate the data in the array

console.log(numbers);
numbers.push(788, { animal: "dog" }, [1, 2, 3, 4]); // add 788 as a new element at the end of the array
console.log(numbers);


// Some array methods do not mutate/change the original array while others do

// some array emthods have a return value , some do not have a return value

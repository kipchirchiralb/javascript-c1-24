//  an arrow function is a different/new/es6 way of writing functions

function taskOne(num) {
  console.log(num + 7);
  console.log("this is a normal function");
}

const taksTwo = (num) => {
  console.log(num + 9);
  console.log("this is an arrow function");
};

taskOne(8);
taksTwo(3);
// ANONYMOUS FUNCTIONS DO NOT HAVE NAMES(often used as callback functions)

function mainFunc(another) {
  console.log("I am the main func");
  another();
}
function cbFunc() {
  console.log("i am the callback function");
}
mainFunc(cbFunc);

mainFunc(function cb2Func() {
  console.log("i am the cb2 function(named)");
});
mainFunc(() => {
  console.log("i am the cb2 function(named)");
});

mainFunc(function () {
  console.log("i am an anonymous function");
});

const myFunc = function () {
  console.log("my function here!!!!!!");
};
const cleanMyFunc = () => {
  console.log("my function here!!!!!!");
};

myFunc();

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter(function testFunc(word) {
  return word.length > 6;
});
const result2 = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]











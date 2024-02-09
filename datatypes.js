//  two catogories of datat types

// primitive/simple data types:- number,string,boolean,null, undefined
// js is dynamically type
let  age = "80";
let  height = 80.78;
let isRight = true;
let isLoading = false;
let male = true;
let jshgkhdbgdf = false;
let startingPoint = null;
let user = "alberjkbcdkvb d*#&#2342";
let year = "2019";

let grow; ///undefined

// check th data types using typeof keyword
console.log(typeof height); // Number
console.log(typeof user); // String
console.log(typeof grow); // Undefined

// complex/composite/non-primitive datatypes :- object, array, function
let car = {
  brand: "toyota",
  model: "vitz",
  yom: 2014,
};
let color = ["yellow", "red", "blue"];
function dance() {
  console.log("jhkbsckvjks;mkv");
  console.log("jhkbsckvjks;mkv");
  console.log("jhkbsckvjks;mkv");
  console.log("jhkbsckvjks;mkv");
  return "dancing.....";
}
console.log(typeof car); //object
console.log(typeof color); // special objetc--Array
console.log(typeof dance); // function
//  special - date,regexp
dance(); // calling -- retrieving and esecuting the code stored in the function
//almost everything in js is an object

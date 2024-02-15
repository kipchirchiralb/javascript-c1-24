//  control structures are ways to manage the flow of execution of code
// they can be sequence, conditional or looping statements

// conditional statement
/**
 * if(con){}
 * if(con) {} else {}
 * if(con){} else if(con){} else if(con){}else{}
 * switch-case
 */

// looping statemets
/**
 * for(start;con;change){}
 * for(elem in array){}
 * for(key in object){}
 * while(con){}
 * do{}while(con)
 */
let number = 0;
let start = 50;
while (start > 30) {
  console.log("hello world");
  number = number + 1;
  console.log(number);
  start = start - 2;
}
console.log("youre done");

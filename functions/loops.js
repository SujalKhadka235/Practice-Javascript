//write a function to add two numbers.
//The first way
// let a;
// let b;
// function sum(a, b) {
//   return a + b;
// }
// const result1 = sum(8, 8);
// console.log(result1);
//second way
// let a;
// let b;
// const result = (a, b) => {
//   return a + b;
// };
// const res = result(10, 10);
// console.log(res);

// Types of function
// Nameless function/Anonymous function(interview question)
// function keyword should be used to make it global

// const a = function () {
//   console.log("hello from nameless");
// };
// a();

// Default function
// write a multiplication table of 2
// If nothing is sent,a=3, a value will be overridden by user sent value

// const mul = (a = 3, b) => {
//   return a * b;
// };
// const res = mul(undefined, 2);
// console.log(res);

//this function is used in pagination

// Pagination function
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pagination = (page = 1, size = 5) => {
  for (i = page; i <= size; i++) {
    console.log(i);
  }
};
pagination();

//Inline function(interview question)

//if we assign variable to nameless function,it is called inline function
const footer = function () {
  console.log("nameless");
};
footer(); //page 1
footer(); //page 2
//concept:resuablilty

//Closure function(interview question)
// write a function that protects your password from being overridden
const vars = "password";
const secret = () => {
  const password = "password";
  return password;
};
console.log(secret());
//use case : used to get the secret environment variables used in the application

//implicit function
function addition(a, b) {
  return a + b;
}
const addit = (a, b) => a + b;
result1 = addition(10, 70);
result2 = addit(10, 20);
console.log(result1);
console.log(result2);
//explicit function

const additi = (a, b) => {
  return a + b;
};
//IIFE(Immediatedly Invoked Functional Experession)
(function (a, b) {
  console.log(a + b);
})(1, 2);

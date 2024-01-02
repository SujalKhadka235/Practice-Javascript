//ARRAYS
//create array-initalization
const array = [
  { name: "Sujal", age: 20 },
  { name: "ram", age: 11 },
  {},
  { a: "hello" },
];
console.log(array);
//Access the last element of an array
console.log(array[array.length - 1]);
//updating the array
// array[0] = 3;
// array[1] = 9;
// console.log(array);
//calling an object initialized in an array
console.log(array[3].a); //returns hello

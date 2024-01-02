//ARRAYS
//create array-initalization
const array = [
  { name: "Sujal", age: 20 },
  { name: "ram", age: 11 },
  { name: "shyam", age: 55 },
];
// console.log(array);
//Access the last element of an array
// console.log(array[array.length - 1]);
//updating the array
// array[0] = 3;
// array[1] = 9;
// console.log(array);
//calling an object initialized in an array
// console.log(array[3].a); //returns hello
//loop inside array
// let data;
// const showname = (data) => {
//   console.log(data.name);
//   return data.name;
// };
// for (let i = 0; i < array.length - 1; i++) {
//   showname(array[i]);
// }
// //Direct source manipulation
// array.forEach(showname); //ES5-directly pulls from the data
// //advanced technique
// //Immutable JS
// //ES6 methods that play with copy
// console.log();
// const ddd = array.map((people) => showname(people)).pop();
// console.log(ddd);
const ex = [
  { name: "ram", age: 26 },
  { name: "shyam", age: 10 },
  { name: "hari", age: 15 },
];

const sortAge = () => {};

sortAge();
const result = ex.map((a) => sortAge(a));

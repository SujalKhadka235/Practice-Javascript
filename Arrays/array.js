//ARRAYS
//create array-initalization
//spread operator
// const array = {
//   name: "sujal",
//   age: 22,
//   iseligibletovote: true,
// };
// const { name, age, ...data } = array;
// console.log(data);
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
// const ex = [
//   { name: "ram", age: 26 },
//   { name: "shyam", age: 10 },
//   { name: "hari", age: 15 },
// ];

// const sortAge = (a, b, c) => {
//   console.log(a, b, c);
//   // for (let i = 0; i < ex.length - 2; i++) {
//   //   for (let j = i + 1; j < ex.length - 1; i++) {
//   //     if (ex[i] > ex[j]) {
//   //       ex[i] = temp;
//   //       temp = ex[j];
//   //       ex[j] = ex[i];
//   //     }
//   //   }
//   // }
// };

// const result = ex.map(sortAge);
//map()
const users = [
  { name: "rakhtim", roles: ["admin"] },
  { name: "harry", roles: ["guest"] },
  { name: "sita", roles: ["admin", "vendor"] },
];

// const checkrole = arr.map((data,index) => {
//   if (data.roles == "admin") {
//     alert("the user is an admin");
//   } else {
//     alert("the user is a" + data.roles);
//   }
// });
// const checkRole = (role) => {
// const newusers = users.map((user) => {
//   if (user.roles.includes(role)) {
//     return user.name;
//   }
// });
console.log(users.filter((user) => user.roles.includes("vendor")));
// };
// console.log(checkRole("vendor"));
//filter returns the emtity if the condition is true.it uses implicit function
// write a function that sums every character from 0 to 100
let i = 0;
const arr = [];
while (i < 100) {
  i++;
  arr[i] = i;
}
const newarr = arr.reduce((sum, a) => {
  return (sum += a);
}, 0);
console.log(newarr);

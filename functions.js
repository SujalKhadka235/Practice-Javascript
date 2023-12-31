//define the function(basic)
//es5
//function add(){}
// const v = prompt("Enter your age");
// function vote(v) {
//   const result =
//     v <= 18
//       ? console.log("You cannot vote")
//       : v <= 100
//       ? console.log("you are allowed to vote")
//       : v == 500
//       ? console.log("you entered 500")
//       : v == 700
//       ? console.log("You entered 700")
//       : console.log("You are too old to vote");
//   return result;
// }
// vote(v);
// alert("${result}");
//es6(arrow function)
//const add=(a,b)=>{};
//const sub=(a,b)=>{};

// const add = (a, b) => {
//   return a + b;
// };
// result = add(10, 20);
// console.log(result);
const table = () => {
  const n = Number(
    prompt("Enter the number you wish to find the multiple of 3")
  );
  console.log(isNaN(n));
  switch (n) {
    case isNaN(n):
      console.log("you entered a string");
      break;
    default:
      for (let i = 1; i <= n; i++) {
        let mult = i * 3;
        console.log(mult);
      }
  }
};
table();

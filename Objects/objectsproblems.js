//Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.
// const product = {
//   price: 90,
// };
// const checkprice = () => {
//   let discount;
//   let realprice;
//   if (product.price > 100) {
//     discount = 0.1 * product.price;
//     realprice = product.price - discount;
//     return realprice;
//   } else {
//     discount = 0.07 * product.price;
//     realprice = product.price - discount;
//     return realprice;
//   }
// };
// console.log(checkprice());

//Write a JavaScript program to calculate circle area and perimeter. Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// const pi = 3.17;
// const radius = Number(prompt("please enter your radius"));
// const area = () => {
//   return pi * (radius * radius);
// };
// const perimeter = () => {
//   return 2 * pi * radius;
// };
// console.log("area= " + area());
// console.log("perimeter= " + perimeter());
// let result = [];
// let secondresult = "";
// const arrange = () => {
//   const array = string.split("");
//   let result = array.sort();
//   return result;
// };
// const rearrange = () => {
//   let secondresult = toString(result);
//   return secondresult;
// };
// console.log(arrange());
// const string = "webmaster";
// const reArranger = (input) => {
//   return input.split("").sort().toString().replaceAll(",", "");
// };

// console.log(reArranger(string));
//write a function that shows if the value is palindrome or not?
//for eg:mom(true)
//palindrome(121)true
//palimndrome(-10)false
//palindrome (10)false
//write a javascript function that accepts string as a parameter and converts the first letter
//of each word into upper case
//eg: the quick brown fox
//output: The Quick Brown Fox
// const palindrome = () => {
//   const str1 = prompt("enter your number");
//   if (typeof str1 === "string") {
//     let str2 = str1;
//     const rev = str2.split("").reverse().join("");
//     if (str1 == rev) {
//       alert("The given entity is a palindrome");
//     } else {
//       alert("The given entity is not a palindrome");
//     }
//   } else {
//     let str3 = String(str1);
//     const rev2 = str3.split("").reverse().join("");
//     if (str1 == rev2) {
//       alert("The given entity is a palindrome");
//     } else {
//       alert("The given entity is not a palindrome");
//     }
//   }
// };
// palindrome();

function last(data, index) {
  let result = [];
  let i = 0;
  while (i < index && data.length > 0) {
    result[i] = data[data.length - 1];
    data.pop();
    i++;
  }
  return result;
  if (index === 1 || index === undefined) return data.pop();
  const lastIndex = data.length - 1;
  const end = lastIndex;
  const start = data.length - index;
  const newArr = data.splice(start, end);
  return newArr;
}

function last1(data) {
  return data[data.length - 1];
}
console.log(last([7, 9, 0, 9, 9], 3));

//const mycolor = ["red", "green", "white", "black"];
//const str = mycolor.join("");
//console.log(str);

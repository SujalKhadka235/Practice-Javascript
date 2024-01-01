//Objects
//write  a javascript function that reverses a number
// const reversenumber = (num) => {
//   const data = String(num);
//   const lengthofdata = data.length;
//   let temp = "";
//   for (let i = lengthofdata - 1; i >= 0; i--) {
//     temp += data[i];
//   }
//   return temp;
// };
// console.log(reversenumber(98));
//write a function to covert tempratures to and from celsius,fahrenheit
// const convert = (temp, measurement = "c") => {
//   if (measurement === "c") {
//     return (9 * temp) / 5 + 32 + "fahrenheit";
//   }
//     return ((temp - 32) / 9) * 5 + "celsius";
// };
// console.log(convert(60, "c"));
//write a program to multiply and divide using default function
const operation = (a, b, check = "g") => {
  if (check === "m") {
    return a * b + " is the multiplication";
  }
  return a / b + " is the divison";
};
console.log(operation(10, 20, "m"));

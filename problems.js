/*let x = 100;
let y = 50;
function check() {
  if ((x = 100 || x + y == 100)) {
    console.log("true");
  }
}
check();*/
//find the max elements in an array
/*
let a = [1, 2, 18, 10];
let i = 0;
let max = 0;
max = a[0];
for (i = 1; i < 4; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
console.log(max);*/
//find the min element of array
/*
let a = [11, 7, 18, 10];
let i = 0;
let min = 0;
min = a[0];
for (i = 1; i < 4; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(min);*/
let num1 = Number(prompt("Enter your number")); // "55"
if (isNaN(num1)) {
  alert("you entered a string");
} else {
  alert("You entered a number");
}

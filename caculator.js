let a = 0;
let b = 0;
function getnum() {
  a = Number(prompt("Enter the first number"));
  if (isNaN(a)) {
    alert("You have entered a string");
  } else {
    b = Number(prompt("Enter the second number"));
    if (isNaN(b)) {
      alert("you have entered a string");
    } else {
      let choice = prompt("Enter the operation you wish to do");
      switch (choice) {
        case "+":
          add(a, b);
          break;
        case "-":
          sub(a, b);
          break;
        case "*":
          multiply(a, b);
          break;
        case "/":
          divide(a, b);
          break;
        default:
          alert("Alert. Wrong operation selected");
          break;
      }
    }
  }
}
function add(a, b) {
  let sum = a + b;
  console.log(sum);
  alert("The sum of the two numbers is " + sum);
}
function subtracta(a, b) {
  let sub = a - b;
  console.log(sub);
  alert("The subtraction of the two numbers is " + sub);
}
function divide(a, b) {
  let div = a / b;
  console.log(div);
  alert("The divison of the two numbers is " + div);
}
function multiply(a, b) {
  let mul = a * b;
  console.log(mul);
  alert("The multiplication of the two numbers is " + mul);
}

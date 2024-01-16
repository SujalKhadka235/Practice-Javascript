const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
let result;
const multiply = () => {
  result = num1 * num2;
  const display = () => {
    return (document.getElementById("display").innerHTML = `Result=${result}`);
  };
  display();
};
const divide = () => {
  result = num1 / num2;
  const display = () => {
    return (document.getElementById("display").innerHTML = `Result=${result}`);
  };
  display();
};

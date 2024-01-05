const today = () => {
  return new Date();
};
document.getElementById("dateid").innerHTML = today();
const print = () => {
  const firstname = document.getElementById("fname").value;
  const lastname = document.getElementById("lname").value;
  console.log(firstname, lastname);
};

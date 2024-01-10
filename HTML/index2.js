const welcome = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const college = document.getElementById("college").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementsByName("gender").value;
  console.log(name, password, email, college, gender);
};

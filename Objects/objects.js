//OBJECTS
//key value pair
const sujal = {
  age: 20,
  firstname: "sujal",
  lastname: "khadka",
  fullname: () => {
    return sujal.firstname + sujal.lastname;
  },
  vote: () => {
    return sujal.age > 18;
  },
};
console.log(sujal.firstname);
console.log(sujal["firstname"]);
console.log(sujal.fullname());
console.log(sujal.vote());

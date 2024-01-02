//OBJECTS
//key value pair
const sujal = {
  dob: "7 jul",
  age: 20,
  firstname: "sujal",
  lastname: "khadka",
  fullname: () => {
    return sujal.firstname + sujal.lastname;
  },
  vote: () => {
    return sujal.age > 18;
  },
  facialfeature: {
    hair: "black",
    eyes: "black",
  },
};
console.log(sujal.firstname);
console.log(sujal["firstname"]);
console.log(sujal.fullname());
console.log(sujal.vote());
//updating the object
sujal.dob = "7feb";
console.log(sujal.dob);
//deleting an element in an object
delete sujal.dob;
//find an element in an object
console.log(sujal.hasOwnProperty("age")); //will return true

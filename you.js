console.log("hello world");
//ES5
var person = "sujal";
person = "hari";
//ES6
//ALLOWS YOU TO REASSIGN THE VARIABLE
let person1 = "ram";
person1 = "hari";
const person2 = "shyam";
//Proudces error when exectued beacuse const value cannot be altered later on
//person1='laxman';
console.log(person2);
//printing undefined as a data type and a value
let h = undefined;
console.log(h);
console.log(typeof h);
//switch case
let k = 25;
switch (k) {
  case 25:
    console.log("the number was 25");
}
//function
function name(n) {
  console.log(n);
}
let sujal = "sujal";
name(sujal);
//ALERT
/*
let cout = confirm("Are you 18 and above");
let cin = prompt("What is your name?");
console.log(cin);
console.log(cout);
//if loop
if (cin == "sujal") {
  console.log("The user is sujal");
}*/
//testing boolean values this will return true.
console.log(2 < 5);
//use triple equals to check condition or ele it will typecast both the values into the same data type.
console.log(5 == "5.0"); //this will return true because of typecast.
console.log(5 === "5.0"); //this will return false because of comparing the values.

//Truthsy and falsy values
if (5) {
  console.log("the number is 5");
}
//Anything other than 0,NULL,NAN(Not A Number),undefined is truthsy value

//
//Guard operator
false && console.log("hello world");
true && console.log("This is guard operator");

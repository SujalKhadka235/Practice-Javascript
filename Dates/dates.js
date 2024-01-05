//DATES IN JAVASCRIPT
//declaration=new date()

const dayfinder = (data) => {
  const check = data.getDay() + 1;
  switch (check) {
    case 0:
      alert("tomorrow is monday");
      break;
    case 6:
      alert("tomorrow is saturday");
      break;
    case 5:
      alert("today is friday");
      break;
    default:
      alert("error");
  }
};

const tommorrow = new Date();
dayfinder(tommorrow);

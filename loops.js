function countVowels(str) {
  // Define an array of vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Initialize a count variable
  let vowelCount = 0;

  // Loop through each character in the string
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const inputString = "Hello, WorldOOOo!";
const result = countVowels(inputString);

console.log(
  `The number of vowels in the string "${inputString}" is: ${result}`
);

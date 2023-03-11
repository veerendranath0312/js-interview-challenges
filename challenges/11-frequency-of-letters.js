/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  // const newStr = str.toLowerCase().split(" ").join("");
  const newStr = str.toLowerCase().replaceAll(" ", "");
  const charsFrequency = {};

  // Loop through the string
  for (let i = 0; i < newStr.length; i++) {
    // if the char exists in the object then increase count
    if (charsFrequency[newStr[i]]) {
      charsFrequency[newStr[i]] += 1;

      // else, add the char as property and assign 1 to it
    } else {
      charsFrequency[newStr[i]] = 1;
    }

    // frequency[newStr[i]] ? frequency[newStr[i]] += 1 : frequency[newStr[i]] = 1
  }
  return charsFrequency;
}

console.log(countChars("Peggy Porth"));
console.log(countChars("Veerendra"));

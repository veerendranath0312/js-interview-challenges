// Confirm the ending

// we can do this in 2 ways
// --- 1. using regular expressions
// --- 2. using slice()

// Test data
// --- confirmEnding("Congratulation", "on") should return true.
// --- confirmEnding("Connor", "n") should return false.
// --- confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// --- confirmEnding("He has to give me a new name", "name") should return true.

function confirmEnding(str, target) {
  let myRegex = new RegExp(target + '$');
  return myRegex.test(str);
  // return str.slice(str.length - str.target) === target;
}

console.group(confirmEnding("Bastian", "n"));
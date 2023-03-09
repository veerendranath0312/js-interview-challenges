/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

// Test your functions
console.log(toTitleCase("everything, everywhere, all at once"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

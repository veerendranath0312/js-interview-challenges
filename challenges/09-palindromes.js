/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// Using built-in methods
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("")
  return str === reverseStr
}

// Without using built-in methods
// function isPalindrome(str) {
//   let reverseStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }

//   return str === reverseStr;
// }

// Test your function
console.log(isPalindrome("abba"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("octopus"))
console.log(isPalindrome("pumpkins"))
console.log(isPalindrome("madam"))

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function sortAlphabetical(str) {
  const sorted = str.split("").sort().join("");
  return sorted;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortStr1 = sortAlphabetical(str1);
  const sortStr2 = sortAlphabetical(str2);

  return sortStr1 === sortStr2;
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));

// HINTS
// 1. If two words are anagrams, there lengths will be the exactly same
// 2. Sort both strings so they're in alphabetical order.
// 3. Are they equal? Then you have an anagram

// Finding the length of the Longest Word
// we can do this in 2 ways
// ----- 1. Uisng for loop
// ----- 2. using map()

// Method 1 -- using for loop
function findLongestWordLength(str) {
  // split the string so that we can get an array of words
  const wordsArray = str.split(' ');

  // loop through the wordsArray for getting the words length
  let wordsLenArray = [];
  for(let i = 0; i < wordsArray.length; i++){
    wordsLenArray.push(wordsArray[i].length);
  }

  // using spread operator for finding maximum length
  return Math.max(...wordsLenArray);
}

// Method 2 - using map()
function findLongestWordLength(str) {
  // split the string so that we can get an array of words
  const wordsArray = str.split(' ');

  // map() takes the every word and finds the length of the word. And it returns an array
  let wordsLenArray = wordsArray.map(word => {
    return word.length;
  });

  // using spread operator for finding maximum length
  return Math.max(...wordsLenArray);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
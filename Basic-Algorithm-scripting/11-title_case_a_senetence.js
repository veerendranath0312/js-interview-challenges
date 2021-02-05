// Title case a sentence

// Test data
// --- titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// --- titleCase("sHoRt AnD sToUt") should return Short And Stout.

function titleCase(str) {
  const wordsArray = str.toLowerCase().split(' ');

  const titleCasedWords = [];
  for(let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    titleCasedWords.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  }
  return titleCasedWords.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));
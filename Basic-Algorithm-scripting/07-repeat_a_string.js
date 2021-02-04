// Repeat a string
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Test data
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", -2) should return "".

function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  }
  let repeatedStr = "";
  for(let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));


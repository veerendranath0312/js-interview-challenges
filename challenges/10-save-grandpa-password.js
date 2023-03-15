/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"

function removeDupeChars(password) {
  // We can achieve this using the new ES6 feature: Set()

  // Split the string and make into an array
  const chars = password.split("")

  // Using Set() get the unique chars set,
  // spread the Set() to convert into array, and join
  const uniquePassword = [...new Set(chars)].join("")

  return uniquePassword
}

console.log(removeDupeChars(password))
console.log(removeDupeChars("aabbccb1212"))

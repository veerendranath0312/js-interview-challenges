// Challenge 1: passwordValidator
// It accepts 2 arguments: password and username
// password must:
//  --be atleast 8 characters
//  --cannot contain spaces
//  --cannot contain the username
// If all rerequirements are met, return true, otherwise return false

function isValidPassword(password, username) {
  if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
    return true;
  }

  return false
}

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));  // true
console.log(isValidPassword('dogLuvr123!', 'dogLuvr')); // false
console.log(isValidPassword('hello1!', 'dogLuvr'));  // false


// Challenge 2: Average
// write a function to find the average of array of numbers
// avg([0, 50])  - 25
// avg([75, 76, 80, 95, 100])  - 85.2

function avg(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }

  return sum / arr.length;
}

console.log(avg([0, 50]));
console.log(avg([75, 76, 80, 95, 100]));


// Challenge 3: Pangrams
// A pangram is a sentence that contains every letter of the alphabet, like:
// The quick brown fox jumps over the lazy dog

function pangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));


// Challenge 4: getPlayingCard
// Write a getCard() function which returns a random playing card object, like:
// { value: 'K', suit: 'clubs'}
// Pick a random value from :
// ---- 2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from :
// ---- clubs, spades, hearts, diamonds
// Return both in an object

function pickIndex(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return index;
}

function getCard() {
  const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
  const valuesIndex = pickIndex(cardValues);

  const cardSuits = ['spades', 'clubs', 'hearts', 'diamonds'];
  const suitsIndex = pickIndex(cardSuits);

  let card = {
    value: cardValues[valuesIndex],
    suit: cardSuits[suitsIndex]
  };

  return card;
}

console.log(getCard());
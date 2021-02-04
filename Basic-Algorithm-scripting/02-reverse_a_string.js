// Reverse of a string
// We can do this in two ways
// ----- 1. using for loop
// ----- 2. using inbuilt methods

// Test Data
// ----reverseString("hello") should become "olleh".
// ----reverseString("Howdy") should become "ydwoH".
// ----reverseString("Greetings from Earth") should return "htraE morf sgniteerG".

function reverseString(str) {
  // Method 1
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }

  // Method 2
  // splitting the string
  // let arr = str.split('');
  // reversing the array
  // arr.reverse();
  // joining the reversed array
  // let reversedString = arr.join('');
  return reversed ;
}

const reversedString = reverseString('hello');
console.log(reversedString);

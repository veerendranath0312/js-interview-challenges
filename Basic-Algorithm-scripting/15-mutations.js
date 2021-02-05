// Mutations

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// Test data
// --- mutation(["hello", "hey"]) should return false.
// --- mutation(["hello", "Hello"]) should return true.
// --- mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

function mutation(arr) {
  let arr1 = arr[0].toLowerCase().split('');
  let arr2 = arr[1].toLowerCase().split('');

  const isEveryCharPresent = arr2.every(char => {
    return arr1.includes(char);
  })

  return isEveryCharPresent;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
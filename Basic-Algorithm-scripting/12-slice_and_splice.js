// Slice and Splice

// Test data

// --- frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// --- frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

function frankenSplice(arr1, arr2, n) {
  const myArray = [...arr2];
  myArray.splice(n, 0, ...arr1);
  return myArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
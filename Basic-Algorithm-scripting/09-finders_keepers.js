// Finders Keepers

// Test data
// --- findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// --- findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
  let num = 0;
  let isPassed = false;
  // looping through the array
  for (let i = 0; i < arr.length; i++) {
    // storing element in a variable called 'num'
    num = arr[i];

    // passing the variable to the function
    if(func(num)) {
      isPassed = true;
      break;
    }
  }

  // we have to return the first even number that appears in the array. if even number is not found in array return 'undefined'
  if(isPassed) return num;
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
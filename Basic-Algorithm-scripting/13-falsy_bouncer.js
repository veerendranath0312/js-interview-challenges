// Falsy Bouncer
// There are 6 Falsy Values in Javascript
// Remaining all are Truthy values

// Test data
// --- bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// --- bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// --- bouncer([false, null, 0, NaN, undefined, ""]) should return [].

function bouncer(arr) {
  const falsyValues = [false, null, 0, "", undefined, NaN];
  const myArray = [];
  for(let i=0; i<arr.length; i++) {
    if(falsyValues.includes(arr[i])) {
      continue;
    } else {
      myArray.push(arr[i]);
    }
  }
  return myArray;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
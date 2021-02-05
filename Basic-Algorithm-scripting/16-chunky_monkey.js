// Chunky Monkey

// Test Data
// --- chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// --- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// --- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// --- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

function chunkArrayInGroups(arr, size) {
  const myArray = [];
  while(arr.length > size) {
    myArray.push(arr.splice(0, size));
  }
  myArray.push(arr);
  return myArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
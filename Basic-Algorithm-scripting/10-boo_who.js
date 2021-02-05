// Boo Who
// return true if the passed values is a boolean else return false


// Test data
// --- booWho(true) should return true.
// --- booWho(false) should return true.
// --- booWho([1, 2, 3]) should return false.
// --- booWho([].slice) should return false.
// --- booWho({ "a": 1 }) should return false.

function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

console.log(booWho(null));
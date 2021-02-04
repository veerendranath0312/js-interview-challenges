// Truncate a string

// Test data
// --- truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
// --- truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
// --- truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".

function truncateString(str, num) {
  if(str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
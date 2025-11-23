function consecutiveSubstrings(string) {
  // type your code here
  const result = [];
  
  // Outer loop: starting position
  for (let i = 0; i < string.length; i++) {
    // Inner loop: ending position
    for (let j = i + 1; j <= string.length; j++) {
      // Extract substring from i to j
      result.push(string.slice(i, j));
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



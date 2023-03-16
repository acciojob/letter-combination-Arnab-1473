function letterCombinations(input_digit) {
  //Complete the function
	const digitToLetters = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
    // "0": ["0"],
    // "1": ["1"],
  };
 function generateCombinations(prefix, remainingDigits) {
    // Base case: we've added all digits
    if (remainingDigits.length === 0) {
      result.push(prefix);
      return;
    }

    // Get the letters corresponding to the next digit
    const nextDigit = remainingDigits[0];
    const letters = digitToLetters[nextDigit];

    // Recursively append each possible letter to the prefix
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(prefix + letters[i], remainingDigits.slice(1));
    }
  }

  // Initialize the result array and call the recursive function
  const result = [];
  generateCombinations("", input_digit);

  // Sort the result array lexicographically and return it
  return result.sort();
}


module.exports = letterCombinations;

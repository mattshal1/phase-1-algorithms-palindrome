function isPalindrome(word) {
  const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let left = 0;
  let right = cleanWord.length - 1;
  
  while (left < right) {
      if (cleanWord[left] !== cleanWord[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello")); // false

/*
  Add written explanation of your solution here
  The isPalindrome function determines whether a given word is a palindrome. A palindrome is a word that reads the same forwards and backwards, disregarding spaces, punctuation, and capitalization.
  1.Cleaning the Word
  2.Initializing Pointers
  3.Comparing Characters
  4.Moving Pointers
  5.Palindrome Check
*/


if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

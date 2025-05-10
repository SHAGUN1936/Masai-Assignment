// fun.js

// Check if a word is a palindrome
function checkPalindrome(word) {
  return word === word.split('').reverse().join('');
}

// Count number of vowels in a word
function countVowels(word) {
  const vowels = 'aeiou';
  return word.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}

// Export both functions
module.exports = {
  checkPalindrome,
  countVowels
};

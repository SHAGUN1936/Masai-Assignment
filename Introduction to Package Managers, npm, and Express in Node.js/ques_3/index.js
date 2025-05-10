// index.js

const randomWords = require('random-words');
const { checkPalindrome, countVowels } = require('./fun');

// Generate 5 random words
const words = randomWords(5);

words.forEach((word, index) => {
  const vowelCount = countVowels(word);
  const isPalindrome = checkPalindrome(word);
  console.log(
    `word ${index + 1} -> ${word} -> vowelsCount: ${vowelCount} -> isPalindrome: ${isPalindrome}`
  );
});

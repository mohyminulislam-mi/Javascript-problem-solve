// Problem 1: Reverse a String
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("ami"));

// Problem 2: Count Vowels in a String
const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiou";

  for (let ch of str.toLowerCase()) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("programming"));

// Problem 3: Check for Palindrome
const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number
const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

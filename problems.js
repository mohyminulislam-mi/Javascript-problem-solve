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

// Problem 6: Sum of All Numbers in an Array
const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
const findEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalizeWords("hello world"));

// Problem 9: Find the Factorial of a Number
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// Problem 10: PingPong Challenge
const pingPong = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
};

pingPong();

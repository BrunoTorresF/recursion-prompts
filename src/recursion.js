/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*input array of numbers, output number
  Accepts array, begin array[0], end array[array.length - 1]
  Add array[i] + array[i + 1]
  return sum
*/
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  }
  return array[0] + arraySum(array.slice(1));
  /* arraySum with recursive call inside For loop
  var total = 0;
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += arraySum(array[i]);
    } else {
      total += array[i];
    }
  }
  return total;*/
};

// 4. Check if a number is even.
/*Number is even when n%2 === 0*/
var isEven = function(n) {
  if (n < 0) {
    return isEven(Math.abs(n));
  }
  return n === 0 ? true : n === 1 ? false : isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*sumBelow(7) = 6+5+4+3+2+1+0 = 21*/
var sumBelow = function(n) {
  if (n < 0) {
    return -(Math.abs(n) - 1 + sumBelow(Math.abs(n) - 1));
  }
  if (n === 0) {
    return 0;
  }
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/* input begin, end numbers; output array of numbers, inclusive
   Create empty array for result numbers
   Begin at x, add 1, test is x+1 < y, if true, push to array
   End when x+1 === y
   return array   */
var range = function(x, y) {
  var results = [];
  if (x === y || x === y - 1 || x === y + 1) {
    return results;
  } else if (x < y) {
    results.push(x + 1);
    return results.concat(range(x + 1, y));
  } else if (x > y) {
    results.push(x - 1);
    return results.concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*Exponentation is X by X N times
  Input numbers base & exp, output number
  Multiply base by base an exp number of times
  Exponentation with negative number is (1/base^exp)*/
var exponent = function(base, exp) {
  return exp === 0
    ? 1
    : exp < 0
      ? 1 / exponent(base, -exp)
      : base * exponent(base, exp - 1);
  /*if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / exponent(base, -exp);
  }
  return base * exponent(base, exp - 1);*/
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*powers of 2 = 1, 2, 4, 8, 16, 32, etc
  Input number, output boolean
  */
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n < 2) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
/*Can turn string to array then string again or use native string methods
  Reverse = string[0] becomes string[string.length - 1]*/
var reverse = function(string) {
  if (string === '') {
    return '';
  }
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
/*palindromes are same back & forward
  So string === reverse(string) and string[0] === string[string.length-1]
  Input string, output boolean
  Check letters, moving outside in (slice or substr method)
  */
var palindrome = function(string) {
  string = string.toLowerCase().replace(/\s/g, '');
  if (string.length === 1 || string.length === 0) {
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*Modulo = x / y until remainder < y
  Input 2 numbers; output 1 number
  Divide x by y OR subtract y from x
  Return remainder (< y)*/
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0 && y < 0) {
    return -modulo(-x, -y);
  }
  if (x < 0 && y > 0) {
    return -modulo(-x, y);
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
/*multiply = x + x, y amount of times
  Input 2 numbers, output numbers
  Base cases: when x/y is 0 or 1
  Add x to x, subtract 1 from y */
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x < 0 && y < 0) {
    return -x + multiply(x, y + 1);
  }
  if (x < 0 || y < 0) {
    return x - multiply(-x, y - 1);
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
/*divide = x - y, y amount of times
  Input 2 numbers, output numbers
  Base cases: when x/y is 0 or 1
  subtract y from x, subtract 1 from y */
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if ((x < 0 && y > 0 && -x < y) || x < -y) {
    return 0;
  }
  if (x > 0 && y > 0 && x < y) {
    return 0;
  }
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest17, 5)).to.equal(~~(17 / 5)17, 5)).to.equal(~~(17 / 5) integer that divides both x and y with no remainder.
// gcd(4,36); // 417, 5)).to.equal(~~(17 / 5)
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === y) {
    return x;
  } else if (x > y) {
    return gcd(x - y, y);
  } else {
    return gcd(x, y - x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/* input 2 strings, output boolean
   if str1[0] === str2[0], return true
   then compare str1[0+1] to str2[0+1],
   continue until 1 string is empty
   */
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/* input string, output array
   Need output array, remove string elements one by one, push to array
   */
var createArray = function(str) {
  let array = [];
  if (str.length === 0) {
    return array;
  } else {
    array.push(str[0]);
    return array.concat(createArray(str.substring(1)));
  }
};

// 17. Reverse the order of an array
/* input array, output array
   Will remove array[0], push to resultArray
   repeat with array.slice(1), concat to resultArray
   return resultArray
   */
var reverseArr = function(array) {
  let result = [];
  if (array.length === 0) {
    return result;
  }
  if (array.length > 0) {
    result.push(array[array.length - 1]);
    return result.concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/* input 2 numbers, output arrays
   num1 = value, num2 = length
   create resultArray, push value, num2 - 1
   repeat until num2 = 0
   return resultArray
  */
var buildList = function(value, length) {
  let result = [];
  if (length === 0) {
    return result;
  } else {
    result.push(value);
    return result.concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 0) {
    return result;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    result.push('FizzBuzz');
    return fizzBuzz(n - 1).concat(result);
  } else if (n % 3 === 0) {
    result.push('Fizz');
    return fizzBuzz(n - 1).concat(result);
  } else if (n % 5 === 0) {
    result.push('Buzz');
    return fizzBuzz(n - 1).concat(result);
  } else {
    result.push(n.toString());
    return fizzBuzz(n - 1).concat(result); //fizzBuzz.concat(results) not results.concat(fizzBuzz)
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/* Input array, value; output number
   compare array[0] to value;
   if true, increase count; if false, move on to next value
   return final count
   */
var countOccurrence = function(array, value) {
  let result;
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    result = 1;
  } else {
    result = 0;
  }
  return result + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let result = [];
  if (array.length === 0) {
    return result;
  }
  if (array.length > 0) {
    result.push(callback(array[0]));
    return result.concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // initialise count varible at
  // if key is not in object
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  //when key is found, increment count
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {};

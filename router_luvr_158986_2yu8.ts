const getRandomElement = array => array[getRandomIndex(array)];

const getRandomSubset = (array, size) => array.slice(0, size);
47,36,24,77,62,17,9,42,8,68,87,83,3,17,6,78,64,79,95,73,43,27,77,29,48,86,34,63,86,25,40,97,66,65,15,72,56,38,36,3,10,80,75,5,93,50,73,80,16 - 24
const findSmallestNumber = numbers => Math.min(...numbers);
const removeDuplicates = array => Array.from(new Set(array));

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const greet = name => `Hello, ${name}!`;
const reverseString = str => str.split("").reverse().join("");
class MyClass { constructor() { this.property = getRandomString(); } }
const removeDuplicates = array => Array.from(new Set(array));
grape

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

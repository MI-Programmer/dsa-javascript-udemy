// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let result = [];
  if (!arr.length) return result;
  result.push(arr[0].toUpperCase());
  result = result.concat(capitalizeWords(arr.slice(1)));
  return result;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizeWords(["hello", "good morning", "waaaaaa!!"]));

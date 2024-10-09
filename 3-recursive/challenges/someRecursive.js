// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;
const isEven = (val) => val % 2 === 0;

function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// function everyRecursive(arr, callback) {
//   if (!arr.length) return true;
//   if (!callback(arr[0])) return false;
//   return everyRecursive(arr.slice(1), callback);
// }

// console.log(everyRecursive([3, 5, 9, 27, 33, 91], isOdd)); // true
// console.log(everyRecursive([1, 3, 5, 7, 9], isOdd)); // true
// console.log(everyRecursive([1, 2, 3, 4], isOdd)); // false
// console.log(everyRecursive([4, 6, 8, 9], isOdd)); // false
// console.log(everyRecursive([4, 6, 8, 100, 20, 22], isEven)); // true
// console.log(everyRecursive([4, 6, 8], (val) => val > 10)); // false

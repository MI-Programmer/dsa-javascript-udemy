// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
// productOfArray([1, 2, 3])
//    return 1 * productOfArray([2, 3])
//               return 2 * productOfArray([3])
//                          return 3 * productOfArray([])
//                                     return 1

console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([1, 5, 3, 10])); // 150

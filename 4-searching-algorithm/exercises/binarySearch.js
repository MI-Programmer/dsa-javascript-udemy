// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

// add whatever parameters you deem necessary - good luck!
function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== el && start <= end) {
    if (el < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === el ? middle : -1;
}

//                       [0, 1, 2, 3, 4, 5, 6,  7,  8,  9,  10] index
console.log(binarySearch([1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29], 24)); // 7  length 11
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//  S              M                  E
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                    S       M       E
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                                SM  E
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                                    SME
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                                EM   S

//                       [0, 1, 2, 3, 4, 5, 6,  7,  8,  9,  10] index
console.log(binarySearch([1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29], 16)); // 7  length 11
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//  S              M                  E
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                    S       M       E
// [1, 2, 3, 4, 5, 9, 10, 16, 20, 23, 29]
//                        SME

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// [1, 2, 3, 4, 5]
//  S     M     E
// [1, 2, 3, 4, 5]
//           SM E
// [1, 2, 3, 4, 5]
//              SME

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2 length 5
// [1, 2, 3, 4, 5]
//  S     M     E  return 2

console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1

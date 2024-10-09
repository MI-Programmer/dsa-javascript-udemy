// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let temp = 0;

//     for (let j = i; j < i + num; j++) {
//       temp += arr[j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// }

// function maxSubarraySum(arr, num) {
//   // O(n ** 2)
//   if (arr.length < num) return null;

//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;

//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }

//   return max;
// }

function maxSubarraySum(arr, num) {
  // O(n)
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([6, 4, 2, 5, 7], 3)); // 14 length 5
// [6, 4, 2] | 12
// maxSum = 12
// tempSum = 12
// [4, 2, 5] | 11
// maxSum = 12
// tempSum = 11
// [2, 5, 7] | 14
// maxSum = 14
// tempSum = 14

// [1, 4, 6] | 11
// 11 - 1 + 2 | 12
// 12 - 4 + 3 | 11

// [1, 4, 6, 2, 3]
// [1, 4, 6] | 11
// [4, 6, 2] | 12
// [6, 2, 3] | 11
console.log(maxSubarraySum([1, 4, 6, 2, 3], 3)); // 12 length 5
// maxSum = 11
// tempSum = maxSum | 11
// for (let i = 3; i < 5; i++ | 4) {
//   11 = 11 - 1 + 2
//   tempSum = tempSum - arr[i - num] + arr[i];
//   11 = 11 | 12
//   maxSum = Math.max(maxSum, tempSum);
// }

// maxSum = 12
// tempSum = maxSum | 11
// for (let i = 4; i < 5; i++ | 5) {
//   12 = 12 - 4 + 3
//   tempSum = tempSum - arr[i - num] + arr[i];
//   12 = 12 | 11
//   maxSum = Math.max(maxSum, tempSum);
// }

console.log(maxSubarraySum([1, 4, 6, 2, 3, 5, 1], 4)); // 16
// 1 + 4 + 6 + 2 = 13 13
// 4 + 6 + 2 + 3 = 15 15
// 6 + 2 + 3 + 5 = 16 16
// 2 + 3 + 5 + 1 = 11 16

console.log(maxSubarraySum([9, 4, 1, 2, 7, 1, 9], 3)); // 17

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//       return [arr[left], arr[right]];
//     } else if (Math.abs(arr[left]) > arr[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, -2, -1, 0, 1, 2, 5, 9]));
// 0 < 6 | -4 + 9 = 5
// 0 < 5 | -4 + 5 = 1
// 0 < 4 | -4 + 3 = -1
// 1 < 4 | -2 + 3 = 1
// 1 < 3 | -2 + 0 = -2
// 2 < 3 | -1 + 0 = -1
// 3 < 3 | condition false while loop nothing each int sum result zero, return undifined
console.log(sumZero([-4, -2, -1, 0, 3, 5, 9])); // [0, 1, 2, 3, 4, 5, 6]
console.log(sumZero([0, 3, 5, 9]));
console.log(sumZero([1, 3, 5, 9]));

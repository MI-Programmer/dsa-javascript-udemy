// function countUniqueValue(arr) {
//   if (!arr.length) return 0;

//   let point1 = 0;
//   let point2 = 1;

//   while (point2 < arr.length) {
//     if (arr[point1] === arr[point2]) {
//       point2++;
//     } else {
//       ++point1;
//       arr[point1] = arr[point2];
//     }
//   }

//   return point1 + 1;
// }

function countUniqueValue(arr) {
  if (!arr.length) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      ++i;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValue([1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
// [1, 2, 3, 4, 7, 4, 7, 7, 12, 12, 13]
// [1, 2, 3, 4, 7, 12, 7, 7, 12, 12, 13]
// [1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));

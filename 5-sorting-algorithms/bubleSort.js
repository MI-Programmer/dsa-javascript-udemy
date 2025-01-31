// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//     }
//   }

//   return arr;
// }

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// }

// optimize with noswap
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5]));

//                      0   1   2   3   4   5   6
console.log(bubbleSort([20, 42, 11, 33, 12, 1, -2])); // length 7
// [20, 42, 11, 33, 12, 1, -2] 20 42 i = 7
// [20, 42, 11, 33, 12, 1, -2] 42 11
// [20, 11, 42, 33, 12, 1, -2] 42 33
// [20, 11, 33, 42, 12, 1, -2] 42 12
// [20, 11, 33, 12, 42, 1, -2] 42 1
// [20, 11, 33, 12, 1, 42, -2] 42 -2
// [20, 11, 33, 12, 1, -2, 42]

// [20, 11, 33, 12, 1, -2, 42] 20 11 i = 6
// [11, 20, 33, 12, 1, -2, 42] 20 33
// [11, 20, 33, 12, 1, -2, 42] 33 12
// [11, 20, 12, 33, 1, -2, 42] 33 1
// [11, 20, 12, 1, 33, -2, 42] 33 -2
// [11, 20, 12, 1, -2, 33, 42]

// [11, 20, 12, 1, -2, 33, 42] 11 20 i = 5
// [11, 20, 12, 1, -2, 33, 42] 20 12
// [11, 12, 20, 1, -2, 33, 42] 20 1
// [11, 12, 1, 20, -2, 33, 42] 20 -2
// [11, 12, 1, -2, 20, 33, 42]

// [11, 12, 1, -2, 20, 33, 42] 11 12 i = 4
// [11, 12, 1, -2, 20, 33, 42] 12 1
// [11, 1, 12, -2, 20, 33, 42] 12 -2
// [11, 1, -2, 12, 20, 33, 42]

// [11, 1, -2, 12, 20, 33, 42] 11 1 i = 3
// [1, 11, -2, 12, 20, 33, 42] 11 -2
// [1, -2, 11, 12, 20, 33, 42]

// [1, -2, 11, 12, 20, 33, 42] 1 -2 i = 2
// [-2, 1, 11, 12, 20, 33, 42]

// [-2, 1, 11, 12, 20, 33, 42] i = 1

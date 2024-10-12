function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let [pivot, swapIdx] = [arr[start], start];
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([10, 2, 8, 22, 4, 20, 25]));
// left = 0 | right = 6
// [10, 2, 8, 22, 4, 20, 25]
// pivotIdx = pivot(arr, 0, 6)
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 0 | i = 1
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 1
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 1 | i = 2
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 2
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 2 | i = 3
//  [10, 2, 8, 22, 4, 20, 25] swapIdx = 2 | i = 4
//  [10, 2, 8, 4, 22, 20, 25] swapIdx = 3
//  [10, 2, 8, 4, 22, 20, 25] swapIdx = 3 | i = 5
//  [10, 2, 8, 4, 22, 20, 25] swapIdx = 3 | i = 6
//  [4, 2, 8, 10, 22, 20, 25] swapIdx = 3
//  return 3

// left = 0 | right = 6
// [4, 2, 8, 10, 22, 20, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// pivotIdx = pivot(arr, 0, 2)
//            [4, 2, 8, 10, 22, 20, 25] swapIdx = 0 | i = 1
//            [4, 2, 8, 10, 22, 20, 25] swapIdx = 1
//            [4, 2, 8, 10, 22, 20, 25] swapIdx = 1 | i = 2
//            [2, 4, 8, 10, 22, 20, 25] swapIdx = 1
//            return 1

// left = 0 | right = 6
// [2, 4, 8, 10, 22, 20, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// pivotIdx = 1
// quickSort(arr, 0, 0)
// return [2, 4, 8, 10, 22, 20, 25]
// quickSort(arr, 2, 2)
// return [2, 4, 8, 10, 22, 20, 25]

// left = 0 | right = 6
// [2, 4, 8, 10, 22, 20, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// return [2, 4, 8, 10, 22, 20, 25]

// left = 0 | right = 6
// [2, 4, 8, 10, 22, 20, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// quickSort(arr, 4, 6)
// pivotIdx = pivot(arr, 4, 6)
//            [2, 4, 8, 10, 22, 20, 25] swapIdx = 4 | i = 5
//            [2, 4, 8, 10, 22, 20, 25] swapIdx = 5
//            [2, 4, 8, 10, 22, 20, 25] swapIdx = 5 | i = 6
//            [2, 4, 8, 10, 20, 22, 25] swapIdx = 5
//            return 5

// left = 0 | right = 6
// [2, 4, 8, 10, 20, 22, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// quickSort(arr, 4, 6)
//  pivotIdx = 5
//  quickSort(arr, 4, 4)
//  return [2, 4, 8, 10, 20, 22, 25]
//  quickSort(arr, 6, 6)
//  return [2, 4, 8, 10, 20, 22, 25]

// left = 0 | right = 6
// [2, 4, 8, 10, 20, 22, 25]
// pivotIdx = 3
// quickSort(arr, 0, 2)
// quickSort(arr, 4, 6)
// return [2, 4, 8, 10, 20, 22, 25]

// PIVOT

// console.log(pivot([9, 2, 5, 10, 6, 20, 25])); // 3
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 0 | i = 1
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 1
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 1 | i = 2
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 2
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 2 | i = 3
// [9, 2, 5, 10, 6, 20, 25] swpaIdx = 2 | i = 4
// [9, 2, 5, 6, 10, 20, 25] swpaIdx = 3
// [9, 2, 5, 6, 10, 20, 25] swpaIdx = 3 | i = 5
// [9, 2, 5, 6, 10, 20, 25] swpaIdx = 3 | i = 6
// [6, 2, 5, 9, 10, 20, 25] swpaIdx = 3
// return 3

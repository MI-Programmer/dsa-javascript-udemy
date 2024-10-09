function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currValue;
  }

  return arr;
}

// [20, 12, 1, 9, 15, 2]
// i = 1 | currValue = 12 | j = 0
// [20, 20, 1, 9, 15, 2] | j = -1
// [12, 20, 1, 9, 15, 2]

// [12, 20, 1, 9, 15, 2]
// i = 2 | currValue = 1 | j = 1
// [12, 20, 20, 9, 15, 2] | j = 0
// [12, 12, 20, 9, 15, 2] | j = -1
// [1, 12, 20, 9, 15, 2]

// [1, 12, 20, 9, 15, 2]
// i = 3 | currValue = 9 | j = 2
// [1, 12, 20, 20, 15, 2] | j = 1
// [1, 12, 12, 20, 15, 2] | j = 0
// [1, 9, 12, 20, 15, 2]

// [1, 9, 12, 20, 15, 2]
// i = 4 | currValue = 9 | j = 3
// [1, 9, 12, 20, 20, 2] | j = 2
// [1, 9, 12, 15, 20, 2]

// [1, 9, 12, 15, 20, 2]
// i = 5 | currValue = 2 | j = 4
// [1, 9, 12, 15, 20, 20] | j = 3
// [1, 9, 12, 15, 15, 20] | j = 2
// [1, 9, 12, 12, 15, 20] | j = 1
// [1, 9, 9, 12, 15, 20] | j = 0
// [1, 2, 9, 12, 15, 20]

//                         0   1   2  3  4   5
console.log(insertionSort([20, 12, 1, 9, 15, 2])); // [ 1, 2, 9, 12, 15, 20 ] length 6
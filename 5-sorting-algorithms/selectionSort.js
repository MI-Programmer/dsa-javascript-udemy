// function selectionSort(arr) {
//   let min = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }

//     [arr[i], arr[min]] = [arr[min], arr[i]];
//   }

//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return arr;
}

//                         0  1  2  3   4   5
console.log(selectionSort([2, 4, 1, 10, 22, 5])); // [1, 2, 4, 5, 10, 22] length 6
console.log(selectionSort([1, 4, 2, 10, 22, 5])); // [1, 2, 4, 5, 10, 22] length 6

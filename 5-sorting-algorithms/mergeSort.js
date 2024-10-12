function merge(arr1, arr2) {
  let [results, i, j] = [[], 0, 0];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const m = Math.floor(arr.length / 2);
  const [l, r] = [mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m))];
  return merge(l, r);
}

console.log(mergeSort([20, 11, 5, 25, 6])); // [5, 6, 11, 20, 25]
// [20, 11, 5, 25, 6] | m = 2
// l = mergeSort([20, 11])
//     m = 1
//     l = mergeSort([20])
//         return [20]
//     r = mergeSort([11])
//         return [11]
//     return merge([20], [11])
//            return [11, 20]

// [20, 11, 5, 25, 6] | m = 2
// l = [11, 22] | r = mergeSort([5, 25, 6])
//                    m = 1
//                    l = mergeSort([5])
//                        return [5]
//                    r = mergeSort([25, 6])
//                        m = 1
//                        l = mergeSort([25])
//                        r = mergeSort([6])
//                        return merge([25], [6])
//                               return [6, 25]

// [20, 11, 5, 25, 6] | m = 2
// l = [11, 22] | r = mergeSort([5, 25, 6])
//                    m = 1
//                    l = mergeSort([5])
//                        return [5]
//                    r = mergeSort([25, 6])
//                        return [6, 25]
//                    return merge([5], [6, 25])
//                           return [5, 6, 25]

// [20, 11, 5, 25, 6] | m = 2
// l = [11, 22] | r = [5, 6, 25]
// return merge([11, 22], [5, 6, 25])
//        return [5, 6, 11, 22, 25]

console.log(mergeSort([20, 11, 5, 25, 6, 22, 55, 100, 1, 7, 9]));

// console.log(merge([2, 31, 42, 52, 90], [10, 20, 21]));
// [2]
// [2, 10]
// [2, 10, 20]
// [2, 10, 20, 21]
// [2, 10, 20, 21, 31, 42, 52, 90]

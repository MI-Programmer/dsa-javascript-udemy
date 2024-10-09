// function collectOddValues(arr) {
//   const arrOdd = [];
//   function helper(arr, i) {
//     if (arr[i] % 2 === 1) {
//       arrOdd.push(arr[i]);
//     }

//     if (arr.length > i) {
//       helper(arr, i + 1);
//     }
//   }

//   helper(arr, 0);

//   return arrOdd;
// }

// helper method recursion
function collectOddValues1(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// [1]
// [1, 3]
// [1, 3, 5]
console.log(collectOddValues1([1, 2, 3, 4, 5])); // [1, 3, 5]
// helper([1, 2, 3, 4, 5])
// helper([2, 3, 4, 5])
// helper([3, 4, 5])
// helper([4, 5])
// helper([5])
// helper([])

// pure recursion
function collectOddValues2(arr) {
  let result = [];

  if (!arr.length) return result;

  if (arr[0] % 2 === 1) result.push(arr[0]);

  result = result.concat(collectOddValues2(arr.slice(1)));
  return result;
}

console.log(collectOddValues2([1, 2, 3, 4, 5])); // [1, 3, 5]
// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1].concat(collectOddValues2([2, 3, 4, 5]))
//                  [] = [].concat(collectOddValues2([3, 4, 5]))
//                                 [3] = [3].concat(collectOddValues2([4, 5]))
//                                                  [] = [].concat(collectOddValues2([5]))
//                                                                 [5] = [5].concat(collectOddValues2([]))
//                                                                                   return []

// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1].concat(collectOddValues2([2, 3, 4, 5]))
//                  [] = [].concat(collectOddValues2([3, 4, 5]))
//                                 [3] = [3].concat(collectOddValues2([4, 5]))
//                                                  [] = [].concat(collectOddValues2([5]))
//                                                                 [5] = [5]

// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1].concat(collectOddValues2([2, 3, 4, 5]))
//                  [] = [].concat(collectOddValues2([3, 4, 5]))
//                                 [3] = [3].concat(collectOddValues2([4, 5]))
//                                                  [] = [5]

// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1].concat(collectOddValues2([2, 3, 4, 5]))
//                  [] = [].concat(collectOddValues2([3, 4, 5]))
//                                 [3] = [3, 5]

// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1].concat(collectOddValues2([2, 3, 4, 5]))
//                  [] = [3, 5]

// collectOddValues2([1, 2, 3, 4, 5])
// [1] = [1, 3, 5]

// return [1, 3, 5]

// pure recursion
function collectOddValues3(arr) {
  let result = [];

  if (!arr.length) return result;

  if (arr[0] % 2 === 1) result.push(arr[0]);

  result = [...result, ...collectOddValues3(arr.slice(1))];
  return result;
}

console.log(collectOddValues3([1, 2, 3, 4, 5])); // [1, 3, 5]

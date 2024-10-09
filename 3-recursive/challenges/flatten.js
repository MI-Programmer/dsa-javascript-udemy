// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// function flatten(arr) {
//   const isArray = Array.isArray(arr[0]);
//   let result = [];
//   if (!arr.length) return [];

//   if (isArray) result = [...result, ...arr[0]];
//   if (!isArray) result = [...result, arr[0]];

//   result = result.concat(flatten(arr.slice(Array.isArray(result[0]) ? 0 : 1)));
//   return result;
// }

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// [1, [2, [3, 4], [[5]]]]
// [1, 2, [3, 4], [[5]]]
// [1, 2, 3, 4, [[5]]]
// [1, 2, 3, 4, [5]]
// [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

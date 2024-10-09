// same func with nested loop, O(n ** 2)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let element of arr1) {
    const correctIndex = arr2.indexOf(element ** 2);

    if (correctIndex === -1) {
      return false;
    } else {
      arr2.splice(correctIndex, 1);
    }
  }

  return true;
}

// [1, 2, 3, 4] [1, 4, 9, 16]
// [1, 2, 2, 3] [4, 1, 9, 4]
// [1, 2, 2, 3, 2] [4, 1, 9]

// same func without nested loop, O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // [1, 2, 3, 2, 2], [1, 4, 4, 9, 4]

  const frequencyCounter1 = {}; // {1: 1, 2: 3, 3: 1}
  const frequencyCounter2 = {}; // {1: 1, 4: 3, 9: 1}

  for (let element of arr1) {
    frequencyCounter1[element] = ++frequencyCounter1[element] || 1;
  }
  for (let element of arr2) {
    frequencyCounter2[element] = ++frequencyCounter2[element] || 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2, 2], [1, 4, 4, 9, 4]));
console.log(same([1, 2, 1], [1, 4]));
console.log(same([1, 2, 3, 5], [1, 4]));
console.log(same([1, 2, 3, 5], [1, 4, 4, 4]));

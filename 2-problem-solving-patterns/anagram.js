// function isAnagram(str1, str2) {
// create fruqency object for both
// loop each char of str1
// increament value of char key if exist, if is not add it and set 1
// loop each char of str2
// increament value of char key if exist, if is not add it and set 1
// loop object frequency 1 using for in
// key char we check if exist in object frequency 2, if is not return false
// value key char we check if same with value key char from object frequency 2, if is not return false
// return true in the end, assign str 2 is angaram of str 1
// }

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const frequencyCounter1 = {};
//   const frequencyCounter2 = {};

//   for (const char of str1) {
//     frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
//   }
//   for (const char of str2) {
//     frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
//   }

//   for (const key in frequencyCounter1) {
//     if (!(key in frequencyCounter1)) {
//       return false;
//     }

//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const lookup = {};

//   for (const char of str1) {
//     lookup[char] = ++lookup[char] || 1;
//   }

//   for (const char of str2) {
//     if (!(char in lookup)) {
//       return false;
//     }

//     if (lookup[char] <= 0) {
//       return false;
//     }

//     lookup[char]--;
//   }

//   return true;
// }

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  for (const char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char]--;
    }
  }

  return true;
}

console.log(isAnagram("", "")); // true
console.log(isAnagram("iceman", "cinema")); // true
console.log(isAnagram("cat", "car")); // false
console.log(isAnagram("hello", "hi")); // false

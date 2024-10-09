// function charCount(str) {
//   // make object to return at end
//   const result = {};
//   // loop over string, for each string
//   for (let i = 0; i < str.length; i++) {
//     // if statement for check char is alphanumeric, if is'nt don't do anything and next iterate
//     if (/^[a-zA-Z0-9]/.test(str[i])) {
//       if (result.hasOwnProperty(str[i])) {
//         // if the char is a key in object, add one to count
//         result[str[i].toLowerCase()] += 1;
//       } else {
//         // if the char is not a key in object, add it to object and set value to 1
//         result[str[i].toLowerCase()] = 1;
//       }
//     }
//   }

//   // return object at end
//   return result;
// }

// function charCount(str) {
//   const result = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();

//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char] += 1;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }

//   return result;
// }

// function charCount(str) {
//   const result = {};

//   for (let char of str) {
//     char = char.toLowerCase();

//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char] += 1;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }

//   return result;
// }

function isAlphanumeric(str) {
  let charCode = str.charCodeAt(0);
  if (
    !(charCode >= 48 && charCode <= 57) && // Angka (0-9)
    !(charCode >= 65 && charCode <= 90) && // Huruf besar (A-Z)
    !(charCode >= 97 && charCode <= 122) // Huruf kecil (a-z)
  ) {
    return false;
  }

  return true;
}

function charCount(str) {
  const result = {};

  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

console.log(charCount("hi123Mskqo"));
console.log(charCount("Hi my name is M| Pro6m@"));

// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(object) {
  const result = { ...object };
  for (const key in result) {
    const value = result[key];
    if (typeof value === "number") result[key] = String(value);
    if (typeof value === "object") {
      result[key] = stringifyNumbers(value);
    }
  }
  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    val2: 10,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
let obj2 = {
  num: 1,
  data1: { a: { l: 10, m: 1 } },
  test: [],
  data: {
    val: 4,
    val2: 10,
    info: {
      isRight: true,
      random: 66,
      a: { l: { z: 10 } },
    },
  },
};

console.log(stringifyNumbers(obj));
console.log(stringifyNumbers(obj2));
console.log(obj);

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

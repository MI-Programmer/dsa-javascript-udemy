// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(object) {
  let total = 0;
  for (const key in object) {
    const value = object[key];
    if (!isNaN(value)) if (value % 2 === 0) total += value;
    if (typeof value === "object") {
      total += nestedEvenSum(value);
    }
  }
  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

var obj3 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
  z: { a: true, c: true, d: "hello", s: 10, d: { p: { l: 20 } } },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.log(nestedEvenSum(obj3)); // 40

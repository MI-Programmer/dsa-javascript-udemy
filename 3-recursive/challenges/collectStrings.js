// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj2 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
        info2: [],
        info3: true,
      },
      thing2: "test",
    },
    val2: {},
  },
  stuff2: "hi",
};

function collectStrings(object) {
  let result = [];
  for (const key in object) {
    const value = object[key];
    if (typeof value === "string") result.push(value);
    if (typeof value === "object") {
      result = result.concat(collectStrings(value));
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
console.log(collectStrings(obj2)); // ["foo", "bar", "baz", "test", "hi"])

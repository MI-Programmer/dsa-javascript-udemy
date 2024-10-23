// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  let result = [];
  if (!arr.length) return result;
  const capitalize = arr[0][0].toUpperCase().concat(arr[0].slice(1));
  result.push(capitalize);
  result = result.concat(capitalizeFirst(arr.slice(1)));
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
// ["car", "taco", "banana"]
// ["Car"]
// result = ["Car"].concat(captalizeFirst(["taco", "banana"]))
//                         result = ["Taco"].concat(captalizeFirst(["banana"])
//                                                  result = ["Banana"].concat(captalizeFirst([])
//                                                                             return []

// ["car", "taco", "banana"]
// ["Car"]
// result = ["Car"].concat(captalizeFirst(["taco", "banana"]))
//                         result = ["Taco"].concat(captalizeFirst(["banana"])
//                                                  return ["Banana"]

// ["car", "taco", "banana"]
// ["Car"]
// result = ["Car"].concat(captalizeFirst(["taco", "banana"]))
//                         return ["Taco", "Banana"]

// ["car", "taco", "banana"]
// ["Car"]
// result = ["Car", "Taco", "Banana"]
//
// return ["Car", "Taco", "Banana"]

console.log(capitalizeFirst(["watermelon", "hi guys", "your welcome"]));

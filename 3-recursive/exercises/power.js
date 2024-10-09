// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent <= 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 3)); // 8
// power(2, 3)
// return 2 * power(2, 2)
//            return 2 * power(2, 1)
//                       return 2 * power(2, 0)
//                                  return 1

// power(2, 3)
// return 2 * power(2, 2)
//            return 2 * power(2, 1)
//                       return 2 * 1 = 2

// power(2, 3)
// return 2 * power(2, 2)
//            return 2 * 2 = 4

// power(2, 3)
// return 2 * 4 = 8

// 8

console.log(power(2, 4)); // 16
console.log(power(10, 3)); // 1000

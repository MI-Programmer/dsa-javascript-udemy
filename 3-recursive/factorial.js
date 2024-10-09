function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorial(5));
console.log(factorialRecursive(5));
console.log(factorialRecursive(3));
// factorialRecursive(3)
// return 3 * factorialRecursive(2)
//            return 2 * factorialRecursive(1)
//                       return 1

// factorialRecursive(3)
// return 3 * factorialRecursive(2)
//            return 2 * 1 = 2

// factorialRecursive(3)
// return 3 * 2 = 6

// 6

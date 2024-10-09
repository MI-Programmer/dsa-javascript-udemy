function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

const time1 = performance.now();
console.log(addUpTo1(10000000000));
// console.log(addUpTo1(4));
const time2 = performance.now();
console.log(time2 - time1 / 1000);

// const time12 = performance.now();
// console.log(addUpTo2(100000000000));
// // console.log(addUpTo2(4));
// const time22 = performance.now();
// console.log(time22 - time12 / 1000);

// function stringSearch(long, short) {
//   for (let i = 0; i < long.length; i++) {
//     if (long[i] === short[0]) {
//       let j = 1;
//       while (j < short.length) {
//         if (long[i + j] !== short[j]) {
//           j = false;
//           break;
//         }
//         j++;
//       }

//       if (j) return i;
//     }
//   }

//   return -1;
// }

function stringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(stringSearch("lorem ipsulm dolor", "lo")); // 2
console.log(stringSearch("lorem ipsum dolor", "dolor")); // 1
console.log(stringSearch("lorem ipsum dolor", "ipso")); // 0

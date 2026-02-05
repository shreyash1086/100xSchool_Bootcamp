function sumValue(obj) {
  let res = {};
  for (const key in obj) {
    let sum = 0;
    for (let i = 0; i < obj[key].length; i++) {
      sum += obj[key][i];
    }
    res[key] = sum;
  }
  return res;
}

console.log(sumValue({ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }));

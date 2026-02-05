function swapKeyValue(data) {
  let res = {};
  for (const key in data) {
    res[data[key]] = key;
  }
  return res;
}

let data = { a: "x", b: "y", c: "z" };

console.log(swapKeyValue(data));

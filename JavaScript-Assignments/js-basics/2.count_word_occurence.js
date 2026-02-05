function countOccurences(arr) {
  let res = {};
  for (let item of arr) {
    if (typeof item !== "string") continue;

    item = item.toLowerCase();

    res[item] = (res[item] || 0) + 1;
  }
  return res;
}
let inp = ["1", "2", "1", "3", "2", "1"];
console.log(countOccurences(inp));

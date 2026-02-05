function flatten(data) {
  let arr = [];
  for (const item in data) {
    for (let i = 0; i < data[item].length; i++) {
      arr.push(data[item][i]);
    }
  }
  return arr;
}

let data = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

console.log(flatten(data));

function largest(data) {
  let largest = 0;
  for (const item in data) {
    if (largest < data[item]) {
      largest = data[item];
    }
  }
  return largest;
}

let data = { a: 60, b: 50, c: 70 };

console.log(largest(data));

const sortAscending = (obj) => {
  const entries = Object.entries(obj); // converts obj into [ [ 'a', 3 ], [ 'b', 1 ], [ 'c', 2 ] ] entries
  entries.sort(([, valueA], [, valueB]) => valueA - valueB); // perform sort operation on the entries
  console.log(entries);
}

sortAscending({ a: 3, b: 1, c: 2 });
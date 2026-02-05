// 20th problem - medium

const merge = (o1, o2) => {
  let res = {};
  for (const i in o1) {
    res[i] = o1[i];
  }

  for (const i in o2) {
    res[i] = o2[i];
  }
  console.log(res);
};

merge({ a: 10, b: 20 }, { a: 5, c: 15 });
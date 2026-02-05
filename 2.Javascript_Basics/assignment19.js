function sumTransaction(arr){
    let res = {};
    for (const j of arr) {
        res[j['user']] = 0;
    }

    for (const j of arr) {
        let prev = res[j["user"]];
        res[j["user"]] = j["amount"]+prev;
    }

    console.log(res);
}

sumTransaction([
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
]);
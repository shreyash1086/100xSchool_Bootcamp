const covertToLookUpById = (arr) => {
    res = {}
    for (const i of arr) {
        res[i['id']] = i;
    }
    console.log(res);
    
}

covertToLookUpById([
  { id: 1, name: "A" },
  { id: 2, name: "B" },
]);
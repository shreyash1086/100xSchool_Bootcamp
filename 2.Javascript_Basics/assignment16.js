const commonKeys = (obj1,obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2);
    const res = [];

    let n;

    if (keys1.length > keys2.length) {
        n = keys2.length;
    } else {
        n = keys1.length;
    }

    for (const i of keys1){
        for (const j of keys2) {
            if (i == j) {
                res.push(i);
                break;
            }
        }
    }
    console.log(res);
}

commonKeys({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 });
function filter(obj) {
    let newObj = {};
    for (const item in obj) {
        if (obj[item] > 50) {
            newObj[item] = obj[item];
        }
    }
    return newObj;
}

console.log(filter({ a: 20, b: 60, c: 40, d: 90 }))
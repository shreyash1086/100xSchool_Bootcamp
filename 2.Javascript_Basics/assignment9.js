const unique = (obj) => {
    let set = new Set([]);
    let arr = [];
    for (const i in obj) {
        for (const j of obj[i]) {
            set.add(j)
        }
    }
    for (const i of set) {
        arr.push(i);
    }
    console.log(arr);
}

unique({ x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] });
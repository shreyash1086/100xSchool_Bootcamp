function chunk(obj, size) {
    let objNew = Object.entries(obj);
    let res = [];
    let temp = [];
    // for (const i of objNew)
    for (let i = 0; i < objNew.length; i++){
        if (temp.length < size) {
            temp.push(objNew[i]);
            if (temp.length == size || i == objNew.length - 1) {
              res.push(temp);
              temp = [];
            }
        }
    }
    console.log(res);
}

chunk({ a: 1, b: 2, c: 3 }, 2);
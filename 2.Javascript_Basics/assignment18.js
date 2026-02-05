const checkNum = (obj) => {
    for (const i in obj) {
        if (typeof obj[i] != "number") {
            return false
        }
    }
    return true;
}

console.log(checkNum({ a: 1, b: "hello", c: 3 }));

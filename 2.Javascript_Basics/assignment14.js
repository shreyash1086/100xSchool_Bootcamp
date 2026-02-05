const queryString = (obj) => {
    let s = "";
    let keys = Object.keys(obj);
    let lastKey = keys[keys.length - 1]
    console.log(lastKey);
    
    for (const i in obj) {
        s = s + i + "=" + obj[i];
        if (i != lastKey) {
            s = s + "&"
        }
    }
    console.log(s);

}

queryString({ name: "Alice", age: 25 });
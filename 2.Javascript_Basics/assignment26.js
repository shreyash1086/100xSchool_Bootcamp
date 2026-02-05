function longest(obj) {
    let lng = "";
    for (const i in obj) {
        if (obj[i].length > lng.length) {
            lng = obj[i];
        }
    }
    console.log(lng);
    
}

longest({ a: "apple", b: "banana", c: "kiwi" });
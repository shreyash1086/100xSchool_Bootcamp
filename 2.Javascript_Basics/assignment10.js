function pickGivenKey(obj, key) {
    let resObj = {};
    for (const i of key) {
        resObj[i] = obj[i];
    }
    console.log(resObj);
    
}

pickGivenKey({ name: "Rahul", age: 23, city: "Noida" }, ["name", "city", "age"]);
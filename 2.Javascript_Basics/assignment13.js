const capitalize = (obj) => {
    for (const i in obj) {
        obj[i] = obj[i].charAt(i).toUpperCase()+obj[i].slice(1);
    }
    console.log(obj);
}

capitalize({ name: "alice", city: "delhi" });
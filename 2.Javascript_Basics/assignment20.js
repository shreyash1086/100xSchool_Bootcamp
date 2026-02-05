const transform = (arr) => {
    const res = {};
    for (const i of arr) {
        res[i.id] = i.name;
        
    }
    console.log(res);
    
}

transform([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]);
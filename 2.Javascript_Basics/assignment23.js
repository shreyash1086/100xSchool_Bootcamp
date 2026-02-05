const revenuePerCategory = (arr) => {
    let res = {};
    for (const i of arr) {
        res[i.category] = 0;
    }
    for (const i of arr) {
        let prev = res[i.category];
        res[i.category] = i.price + prev;
    }
    console.log(res);
    
}

revenuePerCategory([
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
]);
const countEvenOdd = (arr) => {
    let res = {even:0, odd:0};
    for (const j of arr) {
        if (j % 2 == 0) {
            res.even++;
        } else {
            res.odd++;
        }
    }
    console.log(res);
}

countEvenOdd([1, 2, 3, 4, 5, 6]);
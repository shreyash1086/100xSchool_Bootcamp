function highestAverageMarks(obj) {
    let res;
    let avg = 0;
    for (const i in obj) {
        sum = 0;
        for (const j of obj[i]) {
            sum += j;
        }

        if (sum / (obj[i].length) > avg) {
            avg = sum / obj[i].length;
            res = i;
        }        
    }
        console.log(res);
}

highestAverageMarks({ A: [80, 90], B: [70, 75, 85] });
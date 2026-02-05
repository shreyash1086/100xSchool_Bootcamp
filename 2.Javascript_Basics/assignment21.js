const removeFalsy = (obj) => {

    for (const i in obj) {
        
        if(obj[i] == null || obj[i] == undefined || obj[i] == 0 || obj[i] == false || obj[i] == "" || obj[i] == NaN){
            delete obj[i];
        }
        
    }
    console.log(obj);
    
}

removeFalsy({ a: 0, b: null, c: "hello", d: undefined, e: 5 });
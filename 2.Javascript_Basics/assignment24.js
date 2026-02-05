// const removeDupli = (arr) => {
//     let i = 0;
//     let j = arr.length - 1;
//     let index = [];
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i].id == arr[j].id) {
//                 index.push(j);
//             }
//         }
//     }

//     for (let i = index.length-1; i >= 0; i--){
//         arr.splice(index[i],1)
//     }

//     console.log(arr);
    
// }


function removeDupli(arr) {
    let seen = new Set();
    return arr.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id)
        return true;
    })
}

console.log(
  removeDupli([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
    { id: 3, name: "C" },
    { id: 2, name: "B" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 3, name: "C" },
  ]),
);



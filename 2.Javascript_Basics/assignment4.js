let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Even(array) {
    let evenNumbers = [];
    let j = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evenNumbers[j] = array[i];
            j++;
        }
    }
    return evenNumbers;
}

// array.forEach(x => {
//     if (x % 2 === 0) {
//         console.log(x)
//     }
// });


//Map takes each element and do some operation on it and returns a new array
let double = array.map(x => x * 2)

console.log(double);

//filter takes each element and applies a condition on it and returns a new array with only those elements which satisfy the condition

let Evens = array.filter(x => x % 2 === 0)

console.log(Evens);

// console.log(Even(array))
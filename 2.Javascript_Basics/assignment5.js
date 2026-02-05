const users = [
    {
        name: "Shreyash",
        age: 21,
    }, {
        name: "Shreyas",
        age: 17,
    }, {
        name: "Shreya",
        age: 19,
    }
]

function Adults(users) {
    const adults = [];
    users.forEach(user => {
        if (user.age >= 18) {
            adults.push(user)
        }
    })
    return adults;
}

console.log(Adults(users));

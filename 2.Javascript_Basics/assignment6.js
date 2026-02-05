const users = [
    {
        name: "Shreyash",
        age: 21,
        gender: "Male"
    }, {
        name: "Shreya",
        age: 17,
        gender: "Female"
    }, {
        name: "Alex",   
        age: 19,
        gender: "Male"
    }, {
        name: "Maria",
        age: 21,
        gender: "Female"
    }
]

function AdultMales(users) {
    const adultmales = [];
    users.filter(user => {
        if (user.age >= 18 && user.gender == "Male") {
            adultmales.push(user)
        }
    })
    return adultmales;
}

console.log(AdultMales(users));
const name = "Shreyash";

function greet(name) {
    return "Hello," + name;
}

console.log(greet(name));

function isLegal(age) {
    if (age >= 18) {
        console.log("You are allowed to vote");
    } else {
        console.log("You are not allowed to vote");
    }
}

isLegal(20);

const user1 = {
    name: "Shreyash",
    age: 21,
    password:"shreyash10861086"
}

function isLegal2(user) {
    if (user.age >= 18) {
        console.log("Hello " + user.name + ", you are allowed to vote");
    } else {
        console.log("Hello " + user.name + ", you are not allowed to vote");
    }   
}

isLegal2(user1)

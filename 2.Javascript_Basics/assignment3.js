const user = {
    name: "Shreya",
    age: 21,
    gender: "Female"
}

function greet(user) {
    if (user.gender === "Male") {
        console.log("Hello there, Mr." + user.name + " your age is " + user.age);
        isLegal(user.age);
    } else {
        console.log("Hello there, Ms." + user.name + " your age is " + user.age);
        isLegal(user.age);
    }
}

function isLegal(age) {
    if (age >= 18) {
      console.log("You are allowed to vote");
    } else {
      console.log("You are not allowed to vote");
    }
}

greet(user);
const tinderUser = new Object(); // Constructor declaration -> Creates "Singleton" Object

const tinderUser2 = {}; // Literal declaration -> Creates "Non-Singleton" Object

// console.log(tinderUser2);

tinderUser.id = "123abc";
tinderUser.name = "Aayush";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Aayush",
            last_name: "Sakpal"
        }
    }
}

// console.log(regularUser.full_name.user_full_name);
// console.log(regularUser.full_name.user_full_name.last_name);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const users = [
    {
        id: 1,
        emial: "user1@google.com"
    },
    {
        id: 2,
        emial: "user2@google.com"
    },
    {
        id: 3,
        emial: "user3@google.com"
    },
]
console.log(users[1].emial);

console.log(Object.keys(tinderUser)); // Returns an "array" of "keys"
console.log(Object.values(tinderUser)); // Returns an "array" of "values"
console.log(Object.entries(tinderUser)); // Returns an "array" of ("array" containing elements as key and value)
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
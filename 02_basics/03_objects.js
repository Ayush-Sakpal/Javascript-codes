// Objects can be declared in two ways: Literal and Constructor
// Singleton -> Single object : Cannot be constructed using Literal, Can be constructed using Constructor

// Objects -> Key: Value
// Keys -> By default String

const mySym = Symbol("key1");

// Object Literals
const user = {
    name: "Aayush",
    age: 21,
    location: "Pune",
    email: "aayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // Declaring a symbol in object:
    [mySym]: "myKey1",
};

console.log(user.email);
console.log(user["email"]);
console.log(user.age);
console.log(user["age"]);
// Accessing the valye of symbol:
console.log(user[mySym]);
console.log(typeof mySym);

// Accessing attributes of objects:
user.email = "aayush27@google.com";
console.log(user["email"]);

// Freeze the object, i.e, fixing the attributes of the objects:
Object.freeze(user);

// Now even if we change the value of an attribute, it will not be reflected.
user.age = 32;

console.log(user);

// // Declaring a function in objects
// user.greetings = function(){
//     console.log("Hello User!");
// }

// user.greetingsTwo = function(){
//     console.log(`Hello user ${this.name}`);
// }

// // Calling the function in the object:
// console.log(user.greetings());
// console.log(user.greetingsTwo());
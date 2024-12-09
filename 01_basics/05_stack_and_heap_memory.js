// Stack -> Used in all Primitive datatypes
// Heap -> Used in all Non-primitive or Reference datatypes

// Stack -> We always get copy of the variables
// Heap -> We always get the reference to the variables

let myName = "Aayush";
let myAnotherName;

myAnotherName = myName;
myAnotherName = "Ayush Sakpal";

console.log("myName = " + myName);
console.log("myAnotherName = " + myAnotherName);

let user_1 = {
    username: "Aayushh Sakpal",
    password: "helloAayush"
}

let user_2 = user_1;

user_2.username = "Sakpal Aayush";

console.log("Username of user-2: " + user_2.username);
console.log("Username of user-1:" + user_1.username)
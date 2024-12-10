// this -> Represents current context

const user = {
    username: "Aayush",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, Welcome to the Application`); // Here, this -> refers to current object, i.e, user
        // console.log(`Context for user with username ${this.username}\n`, this); // Print the current context
        // console.log("\n");
    }
}

// user.welcomeMessage();

// user.username = "Sakpal";
// user.welcomeMessage();

// console.log(this); // Refers to empty object

// ############################# Important #############################
/*
    In a browser window: Global object is Window object.
    Thus, "this" in browser console outside any scope refers to the Window object

    In node engine: Global object is Empty Object {}
    Thus, "this" in node outside any scope refers to the Empty object {}
*/

// #####################################################################

function one() {
    console.log("Function one:");
    const username = "Aayush";
    console.log(this); // Will print a lot of values
    console.log(this.username); // Will print "undefined"
}

one();
// 'this" works well only with objects and NOT with the functions

// arrow function

const two = () => {
    console.log("Function two:")
    const username = "Aayush";
    console.log(this); // Will print an empty object because this refers to an empty object
    console.log(this.username); // Will print "undefined"
}

two();

// () => {} represents an Arrow Function.
// We can hold this arrow function in a variable

const addThree = (num1, num2) => {
    return num1 + num2;
}
console.log(addThree(7, 5));

// Implicit return arrow function: -> No need to give curly braces and return keyword.
// Useful when we are required to perform a single line computation and return the result of the same
const addFour = (num1, num2) => num1 + num2;
console.log(addFour(5, 10));

// Inorder to return an object, it is necessary to wrap the object in Parenthesis ();
const displayOne = () => ({username: "Aayush Sakpal", age: 21});
console.log(displayOne());
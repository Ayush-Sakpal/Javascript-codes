// Function -> Packaging the lines of codes so that it can be used again and again to carry out that functionality
function sayMyName() {
    console.log("Aayush!");
}

// sayMyName -> Reference to the function
// sayMyName() -> Calling the function or executing the function

sayMyName();
sayMyName();

// parameters number1, number2
function addTwoNumbers(number1, number2) {
    return (number1 + number2);
}

// arguments 7, 9
console.log("Sum of 7 and 9:", addTwoNumbers(7, 9));

function loginUserMessage(username = "Sam") { // default value is assigned to username that is used when no argument is passed
    if(username === undefined) { // username === undefined can be written as !username
        return `Please enter a username!`;
    }
    return `${username} just logged-in!`;
}

console.log(loginUserMessage("Aayush"));

console.log(loginUserMessage());

console.log(loginUserMessage(""));
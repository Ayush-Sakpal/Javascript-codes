function one() {
    let username = "Aayush";

    function two() {
        let application = "MyApp";

        console.log("username in function two:", username);
        console.log("Application in function two:", application);
    }

    console.log("USername in function one:", username);
    // console.log("Application in function one:", application); // Gives error

    two();
}

one();

// Inner block can access variables of the outer block
// Outer block CANNOT access variables of the inner block
// The above is known as Closure(Closure is far more than this!)

// +++++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num) {
    return num + 1;
}

const addtwo = function(num){
    return num + 2;
}

// Both function declarations can be used

console.log(addOne(5));
console.log(addtwo(10));

// Function can be called before function declaration if it is NOT held in a variable during declaration
console.log(addThree(15));

function addThree(num) {
    return num + 3;
}

// Function CANNOT be called before function declaration if it is held in a variable during declaration
// This is called Hoisting(mini. Hoisting is far more than this)
// console.log(addFour(20)); // Will give error

const addFour = function(num) {
    return num + 4;
}
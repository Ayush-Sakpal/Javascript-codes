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
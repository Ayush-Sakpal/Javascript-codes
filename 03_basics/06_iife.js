// IIFE -> Immediately Invoked Function Expressions
// Used when we are required to call the function at the time of declaration

// Write the function as usual and then wrap it with parenthesis and then add extra parenthesis at the end

// named IIFE (since it has name connectDB)
(function connectDB () {
    console.log("DB connected");
})(); // If this semicolon is not given at the end, the function will not know by itself where to end.

// Unnamed IIFE(since it has no name)
( (name, age) => {
    console.log(`DB connected two ${name} and ${age}`);
} )("Aayush", 21);

// IIFE is used to prevent the pollution of global scope.
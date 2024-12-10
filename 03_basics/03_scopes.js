var c = 400;

if(true) {
    let a = 10;
    const b = 20;
    c = 30;
    var d = 40;
}

// console.log(a); // Will give error
// console.log(b); // Will give error
console.log(c); // Will NOT give error! Value of c will be printed
console.log(d); // Will NOT give error! Value of d will be printed

// var is generally avoided due to these issues.

// Anything written under {} -> Block scope
// Anything outside these curly braces -> Global scope
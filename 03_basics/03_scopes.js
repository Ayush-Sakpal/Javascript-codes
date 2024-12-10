var c = 400;
let a = 100;

if(true) {
    let a = 10;
    const b = 20;
    c = 30;
    var d = 40;

    console.log("Value of a inside block =", a); // Will print 10
}

console.log("Value of a outside block =", a); // Will print 100
// console.log(b); // Will give error
console.log(c); // Will NOT give error! Value of c will be printed
console.log(d); // Will NOT give error! Value of d will be printed

// var is generally avoided due to these issues.

// Anything written under {} -> Block scope
// Anything outside these curly braces -> Global scope
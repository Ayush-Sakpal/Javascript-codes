// ################################################## Numbers ##################################################

const score = 400;
console.log(score);

const balance = new Number(800.928931);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(3));

const another_num = 327.973972;
console.log(another_num.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));

// ################################################## Maths ##################################################

console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// General formula to get random numbers between two given nos. min and max.
const min = 10;
const max = 30;

let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);
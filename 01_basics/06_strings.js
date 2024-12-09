const name = "Aayush";
const repo_count = 7;

// Instead of using this, we can use the String intropolation.
// console.log("Hello, my name is " + name + " and my repo count is " + repo_count);

// String intropolation
console.log(`Hello, my name is ${name} and my repo count is ${repo_count}`);

// Another way to declare a string is using new keyword
const gender = new String('Male');
// Using this type of  declaration we can access a large variety of functions that can be performed on strings
// Here every character of the string is mapped with a key(integer starting from 0), i.e,
// 0: M, 1: a, 2: l, 3: e

console.log(gender[2]);
console.log(gender.length);
console.log(gender.toUpperCase());

const some_string = '    Hello   ';
console.log(some_string);
console.log(some_string.trim());
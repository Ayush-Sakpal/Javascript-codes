let age = 33;
let score = "101";
let num = "23abc";

// both types of syntax works
// console.log(typeof(age));
// console.log(typeof age);

age = "33";

// console.log(typeof(age));

// console.log(typeof(score));
// convert to "number"
value_of_score = Number(score);
// console.log(typeof(value_of_score));

value_of_num = Number(num);
// console.log(typeof(value_of_num));
// console.log(value_of_num); // "NaN" => Not a Number

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0


// ########################################### Operations ###########################################

let value = 3;
let negValue = -value; // -3
// console.log(negValue);

// console.log(2+2);  // 4
// console.log(2-2);  // 0
// console.log(2*2);  // 4
// console.log(2/2);  // 1
// console.log(2**3); // 8
// console.log(2%3);  // 0

let str1 = "Hello";
let str2 = " Aayush";
let str3 = str1 + str2;
console.log(str3); // Hello Aayush
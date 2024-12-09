let fruits = ["apple", "banana", "guava", "orange"];
let vegetables = ["brinjal", "cualiflower", "potato"];
// fruits.push(vegetables);

// console.log(fruits);

// let concated_arr = fruits.concat(vegetables);
// console.log(concated_arr);

// Using spread (...arr_name) -> Spreads array into its constituent elements
// let spreaded_arr = [...fruits, ...vegetables];
// console.log(spreaded_arr);

let one_array = [1, 2, 3, [4, 5, 7], 7, [5, 6, [3, 9, 8]]];
let real_another_array = one_array.flat(Infinity); // Specific depth(instead of Infinity like - 1, 2, 3, 4...) can be specified.

console.log(real_another_array);

// Check whether given element is an array
console.log(Array.isArray("Aayush!"));
console.log(Array.from("Aayush!"));
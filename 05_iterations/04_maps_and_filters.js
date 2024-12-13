const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining
// Chaining is evaluated from left to right
const newNums = nums
                .map( (num) => num * 10) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (num) => num + 10) // [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
                .filter( (num) => num >= 50); // [50, 60, 70, 80, 90, 100, 110]

console.log(newNums);
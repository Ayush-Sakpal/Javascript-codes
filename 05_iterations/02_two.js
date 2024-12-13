const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter is used insted of foreach loop when we want to return something
// Foreach loop never returns anything!
const filtered_nums = myNums.filter( (num) => {return num > 4});
console.log(filtered_nums);
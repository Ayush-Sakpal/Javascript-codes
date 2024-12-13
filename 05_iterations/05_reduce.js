const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, curr_val) => { return acc + curr_val}, 0);

console.log(`Total value = ${myTotal}`);
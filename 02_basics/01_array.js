const arr = [1, 2, 3, 4, true, "Aayush", 'f'];
const arr2 = new Array(1, 3, 6, false);

console.log(arr);
console.log(arr2);

console.log(arr[3]);

arr2.push(100, 200);
console.log(arr2);

arr2.pop();
console.log(arr2);

// slice -> makes NO changes in original array
// splice -> Changes the original array
console.log("Original array: " + arr);
console.log("Slice: " + arr.slice(1, 3));
console.log("Original array after Slice: " + arr);

console.log("Splice: " + arr.splice(1, 3));
console.log("Original array after Splice: " + arr);
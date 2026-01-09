// reduce is a HOF that reduces an array to a single value

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, val) => acc+val, 0)
console.log(sum);

let product = nums.reduce((acc, val) => acc*val, 1)
console.log(product);

// The reduce and reduceRight methods follow a common operation called _____: inject and fold
// The reduceRight() method in JavaScript is similar to reduce(), but it processes the array from right to left rather than left to right.
let arr = [10,15,20,30];
const sum2 = arr.reduceRight((acc, num) => acc + num, 0)
console.log(sum2); // Output: 75
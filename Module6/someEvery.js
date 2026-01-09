// Some is HOF: returns true if at least one element in the array satisfies the provided testing function

const transactions = [-1000, -2000, -1500, 3000, -500, -4000];
let resultSome = transactions.some( amount => amount > 0)
console.log(resultSome)

// Every is HOF: returns true if all elements in the array satisfy the provided testing function

let resultEvery = transactions.every( amount => amount > 0)
console.log(resultEvery)
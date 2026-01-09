// find is HOF: returns the first element in an array that satisfies a provided testing function

const transactions = [1000, 2000, -1500, 3000, -500, 4000];
let firstWithdrawal = transactions.find( amount => amount < 0)
console.log(firstWithdrawal)

// findIndex is HOF: returns the index of the first element in an array that satisfies a provided testing function
let firstWithdrawalIndex = transactions.findIndex( amount => amount < 0)
console.log(firstWithdrawalIndex)

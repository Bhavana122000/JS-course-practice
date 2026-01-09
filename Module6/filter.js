//filter is a HOF: it returns a new array containing elements that pass the test implemented by the provided function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = arr.filter(num => num%2 === 0)
console.log(evenNumbers)


const transactions = [1000, -500, 2000, -1500, 3000, -1000, 4000]
let depositedAmount = transactions.filter(amount => amount > 0)
console.log(depositedAmount)
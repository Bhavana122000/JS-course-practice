// callback function - the function that is being passed
// higher order function - the function accepting the callback

const num = [1, 2, 3, 4, 5]
// map is a HOF
// map will always creates a new arr
// console.log(num.map(e => e*2))

const squaredArray = num.map(function(n) {
    return n * n
})
console.log(squaredArray)


// num.forEach(ele => {
//     console.log(ele * 2)
// })

// exercise - convert to dollars using map
const transactions = [3000, 5000, 7800, -6500, -4000]
// const transactionInDollars = transactions.map(amount => (amount * 0.012).toFixed())
// const transactionInDollars = transactions.map(amount => Math.floor(amount * 0.012))
const transactionInDollars = transactions.map(amount => (amount/80).toFixed(0))
console.log(transactionInDollars)


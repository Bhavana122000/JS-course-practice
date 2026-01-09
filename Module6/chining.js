let arr = [
    {name: "A", age: 25, gender: "M"},
    {name: "B", age: 30, gender: "F"},
    {name: "C", age: 22, gender: "M"},
    {name: "D", age: 28, gender: "F"},
    {name: "E", age: 35, gender: "M"},
    {name: "F", age: 27, gender: "F"},
    {name: "G", age: 32, gender: "M"}
]

const mensAges = arr.filter( item => item.gender === "M").map(item => item.age)
console.log(mensAges);


// from the transaction array filer out the poisitive elements and calculate the total
// use filter and reduce to achieve this
let transactions = [100, -50, 200, -30, 150, -20, 300, -10];

let totalPositive = transactions.filter(item => item > 0).reduce((acc, val) => acc + val, 0)
console.log(totalPositive); // Output: 750


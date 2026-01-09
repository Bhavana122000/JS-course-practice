// function printFirstName(firstName, cb) {
//     console.log("🚀 ~ printFirstName ~ firstName:", firstName)
//     cb('Rorgers 2')
// }

// function printLastName(lastName) {
//     console.log("🚀 ~ printLastName ~ lastName:", lastName)
// }

// printFirstName('Steve', printLastName)

// write a function to check if a num is even using callback funciton
function isEven(num){
    return num%2 == 0;
}

const printResult = (evnFn, num) => {
    const isEvenNum = evnFn(num)
    console.log(`The Number ${num} is an even ${isEvenNum} `)
}

printResult(isEven, 16)

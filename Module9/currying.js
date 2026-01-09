//one of the application of closure

function sumCurrying(x) {
    return function(y) {
        console.log(x+y)
    }
}

let sumTwoNumbers = sumCurrying(8)
sumTwoNumbers(3)
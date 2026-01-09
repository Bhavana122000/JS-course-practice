// we have a num and we have to check if the square of num is even or not

// Imperative way of coding
const a = 5;
let isEven = false;
let squaredVal = a * a;
if(squaredVal %2 == 0){
    isEven = true;
}else{
    isEven = false;
}

console.log(isEven);

// Declarative way of coding
const checkForSquare = (x) => { return x * x % 2 === 0 };
console.log(checkForSquare(5));

// const checkForSquare = (x) => x * x % 2 === 0;
// console.log(checkForSquare(5));
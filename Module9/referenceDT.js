let firstPerson = {
    name : "Adam",
    age  : 30
}

let secondPerson = firstPerson

firstPerson.name = "Steve"

console.log(firstPerson)
console.log(secondPerson)
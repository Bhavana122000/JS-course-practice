let firstPerson = {
    name: "Adam",
    age:  25,

    address: {
        city: "Lucknow",
        state: "UP"
    }
}

let secondPerson = {...firstPerson}
secondPerson.name = "Steve"
secondPerson.address.city = "Delhi"

console.log(firstPerson)
console.log(secondPerson)
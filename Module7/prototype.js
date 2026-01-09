let obj = {}

console.log(obj)

let Person1 = {
    name : "Bhavana",
    age  : 25,
    greet: () => {
        console.log('Hello')
    }
}

console.log(Person1)
console.log(Person1.hasOwnProperty('name'))
console.log(Person1.hasOwnProperty('gender'))

//constructor function

function Person(_name, _age){
    this.name = _name
    this.age  = _age
}

let person2 = new Person('Adhya', 45)
console.log(person2)
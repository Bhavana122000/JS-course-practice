function Person(_name, _age){
    this.name = _name
    this.age  = _age

    // this.getNameAndAge = function() {
    //     console.log(this.age)
    // }
}

Person.prototype.getNameAndAge = function() {
    console.log(this.age)
}

let Person1 = new Person("Jack", 57)
let Person2 = new Person("James", 87)

console.log(Person1.getNameAndAge())
console.log(Person2)
class Person{
    constructor(_name, _age){
        this.name = _name,
        this.age = _age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let Person1 = new Person("Bhavana", 23)
Person1.welcome()

console.log(Person1)
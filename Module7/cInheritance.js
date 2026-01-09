// classical inheritance : methods and properties of the base class can in inherited in derived classes

class Person {
    constructor(_name, _age){
        this.name = _name,
        this.age  = _age
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(_name, _age, _classStrength){
        super(_name, _age)
        this.classStrength = _classStrength
    }

    test() {
        super.welcome()
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa){
        super(_name, _age)
        this.cgpa = _cgpa
    }
}

let Person1 = new Person("Jon", 30)
console.log(Person1)

let Teacher1 = new Teacher("Tara", 50, 67)
console.log(Teacher1)

let Student1 = new Student("Mark", 20, 9)
console.log(Student1)

Teacher1.test()
function Person(_name, _age){
    // this.name = _name
    var name  = _name
    this.age  = _age

    this.getName = function(){
        return name
    }
}

let Person1= new Person('Adam', 25)
Person1.name = "Bhavana"

console.log(Person1.getName())
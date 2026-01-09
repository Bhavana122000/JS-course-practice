function createCar(_name, _company, _color){
    this.name = _name;
    this.company = _company;
    this.color = _color;

    this.drive = function() {
        console.log(`I am driving a ${this.name} and it is of ${this.color} color`);
    }
}

let car1 = new createCar("Model S", "Tesla", "Red");
let car2 = new createCar("Mustang", "Ford", "Blue");

console.log(car1);
console.log(car2);
car1.drive();
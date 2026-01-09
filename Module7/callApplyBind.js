let person1 = {
    name    : "Bhavana",
    lastName: "Nayak",
    age     : 26,

    // getPersonDetails: function() {
    //     console.log(`Hi I am ${this.name} ${this.lastName} and I am ${this.age} years old`)
    // }
}

let getPersonDetails = function(city) {
    console.log(`Hi I am ${this.name} ${this.lastName} and I am ${this.age} years old, I am from ${city}`)
}

let person2 = {
    name: "Jonny",
    lastName: "Mark",
    age: 78,

    // getPersonDetails: function() {
    //     console.log(`Hi I am ${this.name} ${this.lastName} and I am ${this.age} years old`)
    // }
}

// person2.getPersonDetails()

//call method
// person1.getPersonDetails.call(person2)
getPersonDetails.call(person2, "Bangalore")

//apply method
getPersonDetails.apply(person1, ['Channapatna'])

//bind
let myFun = getPersonDetails.bind(person2, "Bangalore")
// console.log(myFun)
myFun()

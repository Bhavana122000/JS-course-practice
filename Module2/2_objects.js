var person = {
    firstName : "John", 
    secondName : "Doe",
    age: 30, 
    ownsCar: true, 
    isAvenger : true, 
    friends: ['Jane', 'Mark', 'Emily'],
    address: {
        state: 'New York', 
        city: {
            name: 'Brooklyn',
            pincode: 11201
        }
    }
}

console.log(person); 
console.log(person.friends[1]);
console.log(person.address.city.name);
person.isAvenger = false; 
person.movies = ['Avengers', 'Batman', 'Superman'];
delete person.age;
console.log(person);


//accessing object values 
console.log(person.age); 

//bracket notation
console.log(person["secondName"]); 
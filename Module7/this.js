//console.log(this) // Empty object in non-strict mode

// function displayThis() {
//     console.log(this) //global object in non-strict mode
// }

// displayThis()

const myObj = {
    name: 'Jon',
    age: 22,
    myFn: function() {
        console.log(this) //myObj
    }
}

console.log(myObj.myFn())


const myObj2 = {
    name: 'Jane',
    age: 25,
    myFn2: function() {
        function myFn3() {
            console.log(this) //global object in non-strict mode
        }

        myFn3()
    }
}

console.log(myObj2.myFn2())
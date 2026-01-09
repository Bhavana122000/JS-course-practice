console.log(this)

//2
function displayThis() {
    console.log(this)
}

displayThis()

//3
const myObj = {
    name: 'Bob',
    age: 30,
    myFn1: function() {
        console.log(this)
    }
}

console.log(myObj.myFn1())


//4
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
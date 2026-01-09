// function test1() {
//     let a = 2

//     function test2() {
//         console.log(2)
//     }

//     return test2
// }

// let fun = test1()
// console.log(fun)
// fun()


// closure with nested function
function greet() {
    let name = "Steve"

    function displayName() {
        console.log("Hi i am " + name)

        let age = 25
        function displayAge() {
            console.log("I am "+ name +" and I am " + age)
        }
        return displayAge
    }

    return displayName
}

let g1 = greet()
// console.log(g1)
// g1()

let g2 = g1()
// console.log(g2)
g2()

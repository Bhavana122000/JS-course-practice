// pure function - given the same ip it should always return the same op

var a = 2
// impure function
function addImpure(x) {
    console.log(x+a)
    a++
}

addImpure(2)
addImpure(2)
addImpure(2)

// writing same function as a pure function

function addPure(x, a){
    return x+a
    // console.log(x+a)
}

console.log(addPure(4, 5))

addPure(2, 3)
addPure(2, 3)
addPure(2, 3)
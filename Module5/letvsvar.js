var a = 20;
var a = 35;
console.log("🚀 ~ a:", a)
// solution of the redeclaration problem
let b = 30;
// let b = 100;
console.log("🚀 ~ b:", b)


// scoping : variables declared with let keyword are bloked scope
if (true) {
    let c = 10;
    c = 100;
    console.log("🚀 ~ c:", c)
}

// console.log("🚀 ~ c:", c)


// const : same as let, but reassigning is not allowed
const d = 457;
// const d = 900;
d = 89;
console.log("🚀 ~ d:", d)




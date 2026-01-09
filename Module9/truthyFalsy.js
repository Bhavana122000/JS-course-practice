// let a = 5 -- truthy
// let a = 0 -- falsy
// let a = "scaler" -- truthy
// let a = "" -- Falsy
// let a = false -- falsy
// let a = NaN -- falsy
// let a = null -- falsy
// let a = undefined -- falsy

let a = 0n

if (a) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}


// only these will have the falsy value rest all others will have truthy
// false
// 0
// -0
// 0n (BigInt zero)
// '', "", ``
// null
// undefined
// NaN
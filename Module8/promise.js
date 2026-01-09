//how to produce a promise
let myPromise = new Promise(function(resolve, reject) {
    const a = 10
    const b = 11

    setTimeout(() => {
        if (a==b) {
            resolve("The values are equal")
        } else {
            reject("The values are not equal")
        }
    }, 2000)
})

//pending state
// console.log(myPromise)

//fullfill -> then
//consuming promises
myPromise.then(function(result) {
    console.log(result)
} )

myPromise.catch(function(err) {
    console.log(err)
})

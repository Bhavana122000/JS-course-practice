const fs = require('fs')

console.log('First Line')

// let data = fs.readFileSync('f1.txt', 'utf8')
// // console.log(data.toString())
// console.log(data)

//async
fs.readFile('f1.txt', 'utf8' , cb1)
function cb1(err, data) {
    if (err) {
        console.log(err)
    }

    console.log(data)
    fs.readFile('f2.txt', 'utf8', cb2)
}

// fs.readFile('f2.txt', 'utf8', cb2)
function cb2(err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
    fs.readFile('f3.txt', 'utf8', cb3)
}

// fs.readFile('f3.txt', 'utf8', cb3)
function cb3(err, data){
    if (err) {
        console.log(err)
    }
    console.log(data)
}

console.log('Last Line')
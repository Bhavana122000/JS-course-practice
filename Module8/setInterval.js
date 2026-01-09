function hello() {
    console.log("hello")
}

let timer = setInterval(hello, 2000)

setTimeout(function() {
    clearInterval(timer)
}, 10000)
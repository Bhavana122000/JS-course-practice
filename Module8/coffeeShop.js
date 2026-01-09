function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if (drink === "coffee") {
            resolve("Order received")
        } else {
            reject("Other order received")
        }
    })
}

function processReceivedOrder(order) {
    return new Promise(function(resolve) {
        console.log("Order is being processed")
        resolve(`${order} is served`)
    })
}

// placeOrder("coffee").then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderProcessed = processReceivedOrder("coffee")
//     return orderProcessed
// }).then(function(orderProcessed){
//     console.log(orderProcessed)
// }).catch(function(err) {
//     console.log(err)
// })

async function serveOrder() {
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)

    let processedOrder = await processReceivedOrder(orderPlaced)
    console.log(processedOrder)
}

serveOrder()
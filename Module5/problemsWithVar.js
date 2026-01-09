// 1
var a = 20; 

var a = 89; //redeclaration of var
console.log("🚀 ~ a:", a)


// 2: scoping issue [var keywork is not blocked scope but functional scope]
if(a === 89){
    var b = 40; 
    console.log("🚀 ~ b:", b)
}
console.log("🚀 ~ b:", b)

function test(){
    var c = 45; 
    console.log(c);
}

test();
console.log(c); //function scoped 
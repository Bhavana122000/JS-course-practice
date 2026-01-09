//expression

var a = 2 + 3;
console.log(a);


//function expression
var add = function(a,b){
    return a + b;
}

var res = add(3, 4);
console.log(res);

// you can also assign it to another variable
var sum = add;
console.log("sum " + sum(4, 5));
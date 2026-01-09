// let test1 = function(){
//     console.log("hello");
// }

// let test2 = function(a){
//     console.log(a+2);
// }

// let test3 = function(a, b){
//     console.log(a+b);
// }

// => is called fat arrow 

let test1 = () => console.log("hello");


let test2 = a => console.log(a+2);

let test3 = (a, b) => {
    console.log(a+b);
}

test1()
test2(5)
test3(567, 26)

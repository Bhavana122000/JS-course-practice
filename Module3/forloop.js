var a = 'Hello world'; 

for(var i = 0; i<10; i++){
    console.log(a + " " + i);
}

let arr = [2, 3, 4, 5, 6, 7, 8]; 
let squaredArr = []; 

for(var i=0; i<arr.length; i++){
    squaredArr.push(arr[i] * arr[i]);
}

console.log(squaredArr);
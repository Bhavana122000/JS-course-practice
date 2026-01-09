let arr = [4, true, ,'Bhavana']
let [a, b, c, d, e] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// destructuring an onject


let myObj = {
    name : "Bhavana",
    age : 25,
    gender : 'F',
    address : {
        country: "England",
        city: "London"
    }
}

// let {name: n, age:at , gender, address} = myObj;
// let {name: n, age:at , gender, address: {country}} = myObj;
let {name: n, age:at , gender, address:{country: ctry}} = myObj;
console.log(n);
console.log(at);
console.log(gender);
// console.log(address);
// console.log(country);
console.log(ctry);

var scores = [99, 100, 23, 89, 30];

for (var score of scores){
    console.log(score);
}

// how to access index - use entries()

var colors = ['orange', 'green', 'yellow', 'pink'];

for(var [idx, color] of colors.entries()){
    console.log(idx + ' -> ' + color);
}

var str = 'hello world';

for (var c of str){
    console.log(c);
}





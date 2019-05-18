const arrayOfAges = [ 10, 12, 14 ];

let sum = 0;

for (let value of arrayOfAges){
    sum = sum + value;
}

let result = sum / arrayOfAges.length;
console.log(result);

console.log("hello world");
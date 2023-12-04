const prompt = require("prompt-sync")();

// function greet() {
//     console.log('hello');
// }

// greet();

// let a, b, results;

// a = parseInt(prompt('Enter 1st number: '));
// b = parseInt(prompt('Enter 2nd number: '));

// function add() {
//     results = a + b;
//     console.log(results);
// }

// function sub() {
//     results = a - b;
//     console.log(results);
// }

// add();
// sub();

// function plan() {
//     return 'hello';
// }

// console.log(plan());

// function detail(name, age) {
//     return 'hello' + ' ' + name + '\n' + age;
// }

// let name = 'Yeshi'; 
// let age = 20;

// console.log(detail(name, age));


// // Parameters
// function addnumbers(a = 1,b = 4) {
//     let sum = a + b;
//     return sum;
// }

// console.log(addnumbers(5));//outputs 9
// console.log(addnumbers(5,undefined)); //outputs 9
// console.log(addnumbers(5,null)); //outputs 5
// console.log(addnumbers());//outputs 4 + 1 = 5

//Explicit
// let result = addnumbers(5,3);
// console.log(result);


function what(name, age) {

    return 'hello ' + name + '\nage: ' + age;
}

let name = 'Yeshi';
let age = 20;
console.log(what(name,age));
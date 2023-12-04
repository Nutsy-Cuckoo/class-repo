// /*The for loop is particularly useful when you know in advance how many
//  times you want to execute a block of code.*/

// for (let i = 0; i < 5; i++) {
//     console.log('hello!');
// }

// console.log('\n');

// /*The while loop continues to execute the block of code as long as the specified condition is true.
// It's useful when you don't know in advance how many times the loop needs to run.*/
// let i = 0;

// while (i < 5) {
//     console.log('HELLO!');
//     i++;
// }

// console.log('\n');

// /*The do-while loop is similar to a while loop, but it guarantees that the
//  block of code is executed at least once before the condition is checked.
// The loop continues to execute as long as the specified condition is true.*/
// let j = 0;

// do {
//     console.log('HeLlO!');
//     j++;
// } while (j < 5);

// console.log('\n');

// let k = 1;

// while (k <= 10) {
//     if (k % 2 != 0) {
//         console.log(k);
//     }
//     k++;
// }

// console.log('\n');

// for (let l = 0; l <= 10; l++) {
//     if (l % 2 != 0) {
//         console.log(l);
//     }
// }

// console.log('\n');

// let m = 1;

// do {
//     if (m % 2 != 0) {
//         console.log(m);
//     }
//     m++;

// } while (m <= 10);

// console.log('\n');

// let o = 1;
// while (o <= 10) {
//     console.log(o);
//     o++;
//     o++;
// }

// console.log('\n');

// let p = 1;

// do {
//     console.log(p);
//     p++;
//     p++;
// } while (p <= 10);

// console.log('\n');

// //nested for loop
// for (let q = 1; q <= 3; q++) {
//     console.log('Hi!');
//     for (let r = 1; r <= 3; r++) {
//         console.log('Hello');
//     }
// }

for (let s = 0; s < 4; s++) {
    let row = '';
    for (let t = 0; t < 3; t++) {
        row += '  *';
    }     
    console.log(row);
}
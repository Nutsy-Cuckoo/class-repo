const prompt = require("prompt-sync")();

do {

    let word1 = prompt('Enter a word: ');
    let word2 = prompt('Enter another word: ');

    let word1count = 0;
    let word2count = 0;

    for (let i = 0; i < word1.length; i++) {
        word1count++;
    }

    for (let j = 0; j < word2.length; j++) {
        word2count++;
    }

    console.log('Your first word contains ' + word1count + ' letters.' + '\n' + 'Your second word contains ' + word2count + ' letters.');

    samelettercount = 0;

    for (k = 0; k < word1.length; k++) {
        
        for (l = 0; l < word2.length; l++) {

            if (word1[k] === word2[l]) {
                samelettercount++;
                break;
            }
        }
    }

    console.log('Your words contains ' + samelettercount + ' same letter.');

    response = prompt("Do you want to check again?(yes/no): ");

} while (response == 'yes');

// let count = 0;

// console.log('Similar letters');

// let worda = prompt('worda: ');
// let wordb = prompt('wordb: ');

// if (worda.length !== wordb.length) {
//     console.log('The length of the words should be same!');
// } else {
//     for (let m = 0; m < worda.length; m++) {
//         if (worda[m] === wordb[m]) {
//             count++;
//         }
//     }
// }

// console.log('Same letter(s) count: ' + count);
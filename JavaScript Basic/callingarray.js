const prompt = require("prompt-sync")();

users = [];

let user_limit = 5;
let names = 0;

console.log('Enter 5 users.');

for (let i = 1; i <= user_limit; i++) {

    names = prompt('User ' + i + ': ');
    users.push(names);
}

do {
    let namecall = parseInt(prompt('Enter a number between 0-4: '));

    if (namecall < 0 || namecall > 4) {
        console.log('Invalid choice!');
        break;
    } else {
        console.log(users[namecall]);
    }
    response = prompt("Do you want to check again?(yes/no): ");

} while (response == 'yes');



const prompt = require("prompt-sync")();

// do {
//     let username = [];
//     let userpassword = [];

//     let action = prompt('Do you want to login or signup?');

//     switch (action) {
//         case 'login':

//             let name = prompt('Enter your username: ');

//             if (name != username['']) {
//                 console.log('Incorrect username!');
//             } else {

//                 let password = prompt('Enter your password: ');

//                 if (password != userpassword['']) {
//                     console.log('Incorrect password!');
//                 } else {
//                     console.log('Login Successful!');
//                 }
//             }
//             break;

//         case 'signup':

//             let newname = prompt('Enter your username: ');

//             username.push(newname);

//             let newpassword = prompt('Enter your password: ');

//             let confirm = prompt('Re-enter your password to confirm: ')
//             if (confirm != newpassword) {
//                 console.log('Your passwords do not match!');
//             } else {
//                 userpassword.push(newpassword);
//                 console.log('Registration successful!');
//             }
//             break;
//     }
//     response = prompt("Do you want to check again?(yes/no): ");

// } while (response == 'yes');


// let username = '';
// let userpassword = '';

// do {
//     let action = prompt('Do you want to login or signup?');

//     switch (action) {
//         case 'login':
//             let name = prompt('Enter your username: ');

//             if (name != username) {
//                 console.log('Incorrect username!');
//             } else {
//                 let password = prompt('Enter your password: ');

//                 if (password != userpassword) {
//                     console.log('Incorrect password!');
//                 } else {
//                     console.log('Login Successful!');
//                 }
//             }
//             break;

//         case 'signup':
//             let newname = prompt('Enter your username: ');


//             if (newname == username) {
//                 console.log('Username already exists. Please choose a different one.');
//                 break;
//             }

//             let newpassword = prompt('Enter your password: ');
//             let confirm = prompt('Re-enter your password to confirm: ');

//             if (confirm != newpassword) {
//                 console.log('Your passwords do not match!');
//             } else {

//                 username = newname;
//                 userpassword = newpassword;
//                 console.log('Registration successful!');
//             }
//             break;
//         default:
//             console.log('Write login or signup!');
//     }

//     response = prompt("Do you want to check again? (yes/no): ");

// } while (response == 'yes');


// const prompt = require('prompt-sync')();

// let users = [];


// let users = [];
// let passwords = [];

// function loginOrRegister() {
//     let choice;
//     do {
//         console.log("\n");
//         console.log("Press 1 for login \nPress 2 for Registration")
//         choice = parseInt(prompt(': '));

//         if (choice === 1) {
//             let userName = prompt('Enter your username: ');
//             let passWord = prompt('Enter your password: ');
//             if (users[userName] === userName && passwords[passWord] === passWord) {
//                 console.log("Welcome!");
//             } else {
//                 console.log("invalid name and password");
//             }
//         } else if (choice === 2) {
//             let newUserName = prompt('Enter your name: ');
//             let newPassWord = prompt('Enter your password: ');
//             let confirmation = prompt("comfirm your password: ");
//             if (newPassWord === confirmation) {
//                 users.push(newUserName);
//                 passwords.push(newPassWord);
//                 console.log('Registration successful!');
//             } else {
//                 console.log('Passwords not match.');
//             }
//         } 
//         response = prompt("Do you want to check again?(yes/no): ");
//     } while (response == 'yes');

// }
// loginOrRegister();



// let users = [];
// let passwords = [];

// function loginOrRegister() {
//     let response;
//     do {
//         console.log("\n");
//         console.log("Press 1 for login \nPress 2 for Registration");
//         let choice = parseInt(prompt(': '));

//         if (choice === 1) {
//             let userName = prompt('Enter your username: ');
//             let passWord = prompt('Enter your password: ');

//             // Check if the entered username exists and the password matches
//             if (users.includes(userName) && passwords[users.indexOf(userName)] === passWord) {
//                 console.log("Welcome!");
//             } else {
//                 console.log("Invalid username or password");
//             }
//         } else if (choice === 2) {
//             let newUserName = prompt('Enter your name: ');

//             // Check if the new username already exists
//             if (users.includes(newUserName)) {
//                 console.log('Username already exists. Please choose a different one.');
//             } else {
//                 let newPassWord = prompt('Enter your password: ');
//                 let confirmation = prompt("Confirm your password: ");

//                 if (newPassWord === confirmation) {
//                     users.push(newUserName);
//                     passwords.push(newPassWord);
//                     console.log('Registration successful!');
//                 } else {
//                     console.log('Passwords do not match.');
//                 }
//             }
//         } else {
//             console.log('Invalid choice. Please enter 1 or 2.');
//         }

//         response = prompt("Do you want to check again? (yes/no): ");
//     } while (response.toLowerCase() === 'yes');
// }

// loginOrRegister();



let users = {};
let userCount = 0;
const user_limit = 3;

function loginOrRegister() {
    let choice;
    do {
        console.log("\n");
        console.log("Press 1 for login \nPress 2 for Registration")
        choice = parseInt(prompt(': '));

        if (choice === 1) {
            let userName = prompt('Enter your username: ');
            let passWord = prompt('Enter your password: ');
            if (users[userName] && users[userName] === passWord) {
                console.log("Login Successful!");
            } else {
                console.log("Invalid username or password");
            }
        } else if (choice === 2) {
            if (userCount < user_limit) {
                let newUserName = prompt('Enter your name: ');
                let newPassWord = prompt('Enter your password: ');
                let confirmation = prompt("Confirm your password: ");

                if (users[newUserName]) {
                    console.log('This username already exists!');
                }
                else if (newPassWord === confirmation) {
                    users[newUserName] = newPassWord;
                    userCount++;
                    console.log('Registration successful!');
                } else {
                    console.log('Passwords do not match.');
                }

            } else {
                console.log('Maximum user limit reached.');
            }
        } else if (choice !== 0) {
            console.log('Invalid choice. Please try again.');
        }
        response = prompt("Do you want to check again? (yes/no): ");

    } while (response == 'yes');
}

loginOrRegister();

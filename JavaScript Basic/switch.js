const prompt = require("prompt-sync")();

do {

    activity = prompt('Enter an activity: ');

    switch (activity) {
        case 'wake up':
            console.log('6 AM');
            break;

        case 'breakfast':
            console.log('7 AM - 8 AM');
            break;

        case 'go to school':
            console.log('8:20 AM - 9 AM');
            break;

        case 'school':
            console.log('9:30 AM - 4:30 PM');
            break;

        case 'lunch':
            console.log('1 PM - 2 PM');
            break;

        case 'go home':
            console.log('4:40 PM - 6 PM');
            break;

        case 'study':
            console.log('6:30 PM - 8:30 PM');
            break;

        case 'dinner':
            console.log('8:30 PM - 9 PM');
            break;

        case 'sleep':
            console.log('9:30 PM');
            break;

        default:
            console.log('Invalid Input!');
    }

    response = prompt("Do you want to check again?(yes/no): ");

} while (response == 'yes');
const prompt = require("prompt-sync")();

do {
    grade = parseInt(prompt("Enter your grade: "));

    if (grade <= 100 || grade == 0) {

        if (grade == 100 || grade >= 90) {
            console.log('Grade A');
        }
        else if (grade == 89 || grade >= 60) {
            console.log('Grade B');
        }
        else if (grade == 59 || grade >= 30) {
            console.log('Grade C');
        }
        else if (grade == 29 || grade >= 10) {
            console.log('Grade D');
        }
        else if (grade == 9 || grade >= 1) {
            console.log('Grade D');
        }
        else if (grade == 0) {
            console.log('Grade F');
        }
    }
    else if (grade <= -1) {
        console.log('The grade should be positive!');
    }
    else {
        console.log('The grade should be between 0 - 100!');
    }

    response = prompt("Do you want to calculate again?(yes/no): ");

} while (response == 'yes');

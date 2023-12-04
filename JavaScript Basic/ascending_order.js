const prompt = require("prompt-sync")();

do {
    range = parseInt(prompt("Enter a number between 1-3: "))
    if (range > 3 || range < 1) {
        console.log("Choose a number between 1-3!");
        continue;
    }
    num1 = parseInt(prompt("Enter the first number: "));
    num2 = parseInt(prompt("Enter the second number: "));
    num3 = parseInt(prompt("Enter the third number: "));

    if (num1 < num2 && num2 < num3) {
        console.log(num1 ,num2 ,num3);
    }
    else {
        console.log('The numbers are not in ascending order!');
    }

    response = prompt("Do you want to calculate again?(yes/no): ");

} while (response == 'yes');
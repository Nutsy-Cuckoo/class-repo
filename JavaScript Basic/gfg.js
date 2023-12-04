const prompt = require('prompt-sync')();

console.log('\n');
console.log('\t\tEmployee Management System');

let Name = [];
let ID = [];
let DateOfJoining = [];

console.log('\n');

let choice = prompt('Press 1 to add an employee.\nPress 2 to remove an employee.\nPress 3 to update an employee information.');

switch (choice) {
    case '1':
        addEmployee();
        break;
    case '2':
        // Implement removeEmployee function
        break;
    case '3':
        // Implement updateEmployee function
        break;
}

function addEmployee() {
    let newEmp = prompt("Enter employee's name: ");
    let empID = generateUniqueID(); // You need to implement this function
    let empDate = prompt("Date of joining (YYYY-MM-DD): ");

    Name.push(newEmp);
    ID.push(empID);
    DateOfJoining.push(empDate);
}

function generateUniqueID() {
    // Implement a logic to generate a unique ID, for example, using a counter or a random generator.
    return ID.length + 1; // Simple example, assuming IDs start from 1 and increment by 1
}

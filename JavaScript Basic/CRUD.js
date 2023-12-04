const prompt = require("prompt-sync")();

// console.log('\n');
// console.log('\t\tEmployee Management System');
// console.log('\n');

// let Name = [];
// let ID = [];
// let Date = [];
// let nextID = 1;

// while (true) {
//     console.log('Employee Name: \tEmployee ID: \tDate: ');

//     if (Name.length === 0) {
//         console.log('\tNo employees to display.');
//     } else {
//         for (let i = 0; i < Name.length; i++) {
//             console.log(Name[i] + '\t\t' + ID[i] + '\t\t' + Date[i]);
//         }
//     }

//     console.log('\n');
//     console.log('Press 1 to add an employee.\nPress 2 to remove an employee.\nPress 3 to update an employee information.\n');

//     let Option = parseInt(prompt('Enter your choice: '));

//     switch (Option) {

//         case 1:
//             add();
//             break;

//         case 2:
//             remove();
//             break;

//         case 3:
//             update();
//             break;

//         default:
//             console.log('Invalid choice');
//     }

//     function generateID() {
//        return nextID++;
//     }

//     function add() {
//         let newemp = prompt("Enter employee's name: ");
//         let empID = generateID();
//         let empdate = prompt("Date of joining: ");

//         Name.push(newemp);
//         ID.push(empID);
//         Date.push(empdate);

//         console.log('Added Successfully!\n');
//     }

//     function remove() {
//         let idToRemove = prompt("Enter employee ID to remove: ");
//         let indexToRemove = 0;

//         for (let i = 0; i < ID.length; i++) {
//             if (ID[i] === idToRemove) {
//                 indexToRemove = i;
//                 break;
//             }
//         }

//         if (indexToRemove !== 0) {
//             ID.splice(indexToRemove, 1);
//             Date.splice(indexToRemove, 1);
//             console.log("Employee removed successfully.\n");
//         } else {
//             console.log('Employee ID not found!\n');
//         }
//     }

//     function update() {
//         let idToUpdate = prompt("Enter employee ID to update: ");
//         let indexToUpdate = 0;

//         for (let i = 0; i < ID.length; i++) {
//             if (ID[i] === idToUpdate) {
//                 indexToUpdate = i;
//                 break;
//             }
//         }

//         if (indexToUpdate !== 0) {
//             let newDate = prompt("Enter new start date: ");
//             Date[indexToUpdate] = newDate;
//             console.log("Employee updated successfully.\n");
//         } else {
//             console.log('Employee ID not found!\n');
//         }
//     }
// }












console.log('\n');
console.log('\t\tEmployee Management System');
console.log('\n');

let Name = [];
let ID = [];
let Date = [];

let nextID = 1; // New variable to track the next available ID

while (true) {
    console.log('Employee Name: \tEmployee ID: \tDate: ');

    if (Name.length === 0) {
        console.log('\tNo employees to display.');
    } else {
        for (let i = 0; i < Name.length; i++) {
            console.log(Name[i] + '\t\t' + ID[i] + '\t\t' + Date[i]);
        }
    }

    console.log('\n');
    console.log('Press 1 to add an employee.\nPress 2 to remove an employee.\nPress 3 to update an employee information.\n');

    let Option = parseInt(prompt('Enter your choice: '));

    switch (Option) {
        case 1:
            add();
            break;
        case 2:
            remove();
            break;
        case 3:
            update();
            break;
        default:
            console.log('Invalid choice');
    }

    function generateID() {
        return nextID++;
    }

    function add() {
        let newemp = prompt("Enter employee's name: ");
        let empID = generateID();
        let empdate = prompt("Date of joining: ");

        Name.push(newemp);
        ID.push(empID);
        Date.push(empdate);

        console.log('Added Successfully!\n');
        
    }

    function remove() {
        let idToRemove = prompt("Enter employee ID to remove: ");
        let indexToRemove = ID.indexOf(parseInt(idToRemove));

        if (indexToRemove !== -1) {
            ID.splice(indexToRemove, 1);
            Date.splice(indexToRemove, 1);
            Name.splice(indexToRemove, 1);
            console.log("Employee removed successfully.\n");
        } else {
            console.log('Employee ID not found!\n');
        }
    }

    function update() {
        let idToUpdate = prompt("Enter employee ID to update: ");
        let indexToUpdate = ID.indexOf(parseInt(idToUpdate));

        if (indexToUpdate !== -1) {
            let newname = prompt('Enter new name: ');
            Name[indexToUpdate] = newname;
            let newDate = prompt("Enter new start date: ");
            Date[indexToUpdate] = newDate;
            console.log("Employee updated successfully.\n");
        } else {
            console.log('Employee ID not found!\n');
        }
    }
}




// function employees() {
//   let employeeList = [];
//   let counter = 1; 

//   console.log("\n    EMPLOYEE MANAGEMENT SYSTEM\n");
//   console.log("          EMPLOYEE LIST\n");

//   while (true) {
//     console.log("PRESS 1. ADD EMPLOYEE\nPRESS 2. REMOVE EMPLOYEE\nPRESS 3. UPDATE EMPLOYEE\nPRESS 4. VIEW DATA\n");
//     let input = parseInt(prompt(': '));

//     if (input === 1) {
//       let name = prompt('Enter employee Name: ');
//       let date = prompt('Enter employee Date: ');
      
//       employeeList.push({ emID: counter, name, date }); 
//       counter++;
//       console.log("\n");
//     } else if (input === 2) {
//       let idToRemove = parseInt(prompt('Enter the employee ID to remove: '));
//       let IDRemove = employeeList.findIndex(employee => employee.emID === idToRemove);

//       if (IDRemove !== -1) {
//         employeeList.splice(IDRemove, 1);
//         console.log('Employee removed successfully.\n');
//         employeeList.forEach((employee, index) => {
//           employee.emID = index + 1;
//         });
//         counter = employeeList.length + 1; // Update the counter
//       } else {
//         console.log('Employee ID not found.\n');
//       }
    
//     } else if (input === 3) {
//       let idToUpdate = parseInt(prompt('Enter the employee ID to update: '));
//       let idUpdate = employeeList.findIndex(employee => employee.emID === idToUpdate);

//       if (idUpdate !== -1) {
//         let newName = prompt('Enter updated employee Name: ');
//         let newDate = prompt('Enter updated employee Date: ');

//         employeeList[idUpdate].name = newName;
//         employeeList[idUpdate].date = newDate;
//         console.log('Employee information updated successfully.\n');
//       } else {
//         console.log('Employee ID not found.\n');
//       }
//     } else if (input === 4) {

//       console.log('List of employees:\n');
//       console.log('EM.ID\tName\tDate');
//       employeeList.forEach(employee => {
//         console.log('EM '+employee.emID + '\t' + employee.name + '\t' + employee.date);
//       });
//       console.log("\n");
//     } else {
//       console.log('Invalid input. Please enter a valid option.\n')
//     }
//   }


// }

// employees();
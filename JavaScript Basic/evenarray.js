let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        console.log(numbers[i] + ' is an even number');
    }
}

console.log('\n');

for (let j = 0; j < numbers.length; j++) {

    if (numbers[j] % 2 != 0) {
        console.log(numbers[j] + ' is an odd number');
    }
}
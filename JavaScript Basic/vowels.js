const prompt = require("prompt-sync")();

do{
    let word = prompt('Enter a word: ');

    let vowelcount = 0;
    let consonantcount = 0;

    //for iterating every character 
    for (let i = 0; i < word.length; i++) {
        
        let char = word[i];   //separates letter
                              
        //to check if the letter/character within the word is vowel or not.
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ) {                           
            vowelcount++; 
        } else {
            consonantcount++;
        }
    }

    console.log('Your word contains '+ vowelcount + ' vowel(s).');
    console.log('Your word contains '+ consonantcount + ' consonant(s).');

    response = prompt("Do you want to calculate again?(yes/no): ");

} while(response == 'yes');
import inquirer from "inquirer"

let roundNumber :number= Math.floor((Math.random() * 4) +1);
let userInput = await inquirer.prompt({
type : 'number',
name : 'guessedNumber',
message : 'Guess the number between 1-4'
})
if( userInput.guessedNumber ===roundNumber ){
    console.log('Congrats you guessed it correctly');
    
}else{
    console.log(`Sorry! try again next time. correct answer is ${roundNumber}`);
    
}
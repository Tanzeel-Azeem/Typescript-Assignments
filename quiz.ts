// The app will show the students multiple choice questions and promt the user to reply.
// In the end it will show the students the result of the quiz.

import { log } from "console";
import inquirer from "inquirer";

let quiz = await inquirer.prompt([
  {
    name: "test",
    type: "list",
    message: "Who is the G.O.A.T",
    choices: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Micheal Jordan",
      "Virat Kholi",
    ],
  },
]);
if (quiz.test === "Cristiano Ronaldo") {
  console.log("You guessed it Correct");
} else {
  console.log("Wrong answer");
}
// ---------------2----------------

let quiz2 = await inquirer.prompt([
  {
    name: "test2",
    type: "list",
    message: "How many UCL does Real MAdrid have ?",
    choices: ["13", "14", "15", "16"],
  },
]);

if (quiz2.test2 === "15") {
  console.log("You guessed it correct");
} else {
  console.log("Wrong Answer ");
}

//   ---------------3------------

let quiz3 = await inquirer.prompt([
  {
    name: "test3",
    type: "list",
    message: "Who is the best cousin",
    choices: ["Ayesha", "Anzela", "Rabia", "Yousuf"],
  },
]);

if (quiz3.test3 === "Anzela") {
  console.log("You guessed it correct");
} else if (quiz3.test3 === "Ayesha") {
  console.log("You guessed it correct");
} else {
  console.log("Wrong answer");
}

// -------------------------------4-----------------------

let quiz4 = await inquirer.prompt([
  {
    name: "test4",
    type: "list",
    message: "WHo is the best ?",
    choices: ["Kaleem bhai", "Shaheen behn", "Fatisa "],
  },
]);

if (quiz4.test4 === "Kaleem bhai") {
  console.log("You guessed it correct");
}  if (quiz4.test4 === "Shaheen behn") {
  console.log("You guessed it correct");
}  if (quiz4.test4 === "Fatisa ") {
  console.log("You guessed it correct");
}

// console.log('You got 4/2... COngrats');


// ------------5--------------

let quiz5 = await inquirer.prompt([
    {
      name: "test5",
      type: "list",
      message: "Which is your fav. food ?",
      choices: ["Pasta", "Noodles", "Pizza "],
    },
  ]);
  
  if (quiz5.test5 === "Pasta") {
    console.log("You guessed it correct");
   }else {
    console.log('Wrong Answer');
    
  }




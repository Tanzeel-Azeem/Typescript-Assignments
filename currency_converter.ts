

let currency_value : {[key : string]: number}={
    USD : 280,
    JPY : 2,
    EUR : 300
}


import inquirer from "inquirer"

let ans = await inquirer.prompt([{
    type : 'list',
    name : 'from',
    message: 'converting from',
    choices: ['USD','JPY','EUR']
},
{
type : 'list',
name : 'to',
message: 'converting to',
choices: ['USD','JPY','EUR']
},
{
    type : 'number',
    name : 'amount',
    message : 'Your amount to convert'
}])
console.log(currency_value[ans.to] / currency_value[ans.from] * ans.amount);

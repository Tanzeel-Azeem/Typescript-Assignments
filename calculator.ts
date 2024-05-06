import inquirer from "inquirer"

let ans = await inquirer.prompt([{
    type : 'number',
    name : 'first_number',
    message : 'Enter your first number'
},
{ 
    type : 'number',
name : 'second_number',
message : 'Enter your second number'

},
{
    type : 'list',
    name: 'operator',
    message:'Please select operation type',
    choices : ['Addition','subtraction','multiplication','division']
}
])
if (ans.operation ==='Addition'){
    console.log(ans.first_number + ans.second_number);
    
}else if(ans.operation === 'subtraction'){
    console.log(ans.first_number - ans.second_number);
    
}else if(ans.operation === 'multiplication'){
    console.log(ans.first_number * ans.second_number);
    
}else{
    console.log(ans.first_number / ans.second_number);
}
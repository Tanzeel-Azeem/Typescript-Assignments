import inquirer from 'inquirer'

let todo_list : string[] = [];

let while_condition = true

while (while_condition === true){
    let options = await inquirer.prompt([{
        type: 'input',
        name : 'user_option',
        message: 'please select an option',
        choices : ['add','remove']
    }])



    if (options.user_option === 'add'){
        let ans = await inquirer.prompt([{
            type: 'input',
            name : 'user_ans',
            message: 'Write something to add in the task list',
    }])



    if (ans.user_ans !== ''){
        todo_list.push(ans.user_ans);
        console.log(todo_list);
        
    }else{
        console.log('Please write something to add in the todo list');
        
    }
}
 
else if (options.user_option === 'remove'){
    let remove_choice = await inquirer.prompt([{
        type:'list',
        name : 'remove_item',
        message:'select item to remove',
        choices : todo_list
    }]);
    let index_to_remove = todo_list.indexOf(remove_choice.remove_item)

    if(index_to_remove >=0){
        todo_list.splice(index_to_remove , 1)
        console.log('You removed : ',remove_choice.remove_item);
        console.log(todo_list);
        
    }




    let user_ans = await inquirer.prompt({
        type: 'confirm',
        name : 'selection',
        message : 'Do you want to continue?'
    })

    if (user_ans.selection === false){
        while_condition = false
    }
}
}
console.log('Thank you for using todo list <3');

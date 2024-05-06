import inquirer from 'inquirer'
let myBalance = 0;
let isCountinue = true;
let pinCode = 6969;

const message = '\n\n\t\tWelcome to ATM\t\t'
console.log(message);

let pin_ans = await inquirer.prompt({
    type : 'number',
    name : 'ans',
    message : 'Please enter yuor pin code'
})


if(pin_ans.ans === 6969){

    do {
        let ans = await inquirer.prompt({
    type : 'list',
    name : 'list',
    message : 'Select any option',
    choices : ['Deposit','withdraw','fast cash','balance check']
    })
    
    // --------------------------deposit--------------------------------
    
    if (ans.list === 'Deposit'){
        let ans = await inquirer.prompt({
            type : 'number',
            name : 'Deposit_amount',
            message: 'Please enter your amount'
    })
    if (ans.Deposit_amount > 0){
        myBalance = myBalance + ans.Deposit_amount
        console.log(myBalance);
        
    }
    }
    // --------------------------withdraw-----------------
    else if(ans.list === 'withdraw'){
        let ans = await inquirer.prompt({
            type : 'number',
            name : 'withdraw_amount',
            message: 'Please enter your amount'
    })
    if(ans.withdraw_amount <= myBalance){
        myBalance= myBalance - ans.withdraw_amount
        console.log(myBalance);
        
    }
    else{
        console.log("sorry not enough money");
        
       }
    }
    
    // ----------------fast cash---------
    
    else if (ans.list === 'fast cash'){
        let ans = await inquirer.prompt({
            type : 'list',
            name : 'fast_cash',
            message : 'Choose your amount',
            choices : ['500','1000','2000','5000','10000','20000','25000']
        })
    
        if ( ans.fast_cash <= myBalance){
            if (ans.fast_cash === '500'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }
            else if (ans.fast_cash === '1000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }else if  (ans.fast_cash === '2000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            } else if (ans.fast_cash === '5000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }else  if (ans.fast_cash === '10000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }else  if (ans.fast_cash === '20000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }else  if (ans.fast_cash === '25000'){
                myBalance-=ans.fast_cash
                console.log(myBalance);
                
            }
        }
    }
    // =============check balance==============
    else if ( ans.list=== 'balance check' ){
        console.log(`Your balance is ${myBalance}`);
        
    }
    
    let while_ans = await inquirer.prompt({
        type : 'confirm',
        name : 'condition',
        message: 'Do you want to continue?'
    })
    
    if (while_ans.condition===false){
        isCountinue = false
    }
     }
     while (isCountinue)
}

else {
    console.log('Invalid pin code');
    
}
    
 
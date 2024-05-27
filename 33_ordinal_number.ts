let numbers :number[]= [1,2,3,4,5,6,7,8,9];
for (let index = 0; index < numbers.length; index++) {
    
    if (numbers[index]===1){
        console.log(`${numbers[index]}st`);
        
    }
    
    else if (numbers[index]===2){
        console.log(`${numbers[index]}nd`);
        
    }
    
    else if (numbers[index]===3){
        console.log(`${numbers[index]}rd`);
        
    }
    
    else{
        console.log(`${numbers[index]}th`);
        
    }

    
}


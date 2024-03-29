let magician :string []= ['Dr.Strange', 'Dormamu', 'Luka Modric','KDB','Kong'];

function copyArray(arr : string[]){
    return[...arr]
}




function make_magician (magicianArray :String []){
    for (let i=0; i<magicianArray.length; i++){
        magicianArray[i]= 'The Great '+ magicianArray[i]
    }
}


function show_magicians(magicians:string []){
    magicians.forEach(element => {
       console.log(element);
        
    });
}


const copyMagicianArray = copyArray(magician)
make_magician(copyMagicianArray)
console.log('This is my ORIGINAL Array')
show_magicians(magician)
console.log('This is my MODIFIED Array')
show_magicians(copyMagicianArray)

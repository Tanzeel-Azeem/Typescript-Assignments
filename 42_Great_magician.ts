let magician :string []= ['Dr.Strange', 'Dormamu', 'Luka Modric','KDB','Kong'];




function magicianArray(magicianArray :String []){
    for (let i=0; i<magicianArray.length; i++){
        magician [i]= 'The Great '+ magicianArray[i]
    }
}


function show_magicians(magicians:string []){
    magicians.forEach(element => {
       console.log(element);
        
    });
}
magicianArray(magician)
show_magicians(magician)
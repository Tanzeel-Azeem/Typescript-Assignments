let personName : string = '';

personName = prompt('What is your name ?') || '';

let Lowercase : string = personName.toLowerCase();

let Uppercase : string = personName.toUpperCase();

let Tittlecase : string =  personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');


if(personName !== null && personName !== ''){
    
    alert(`Hello Mr.${personName}, here are your name in :
    Lowercase : ${Lowercase}
    Uppercase : ${Uppercase}
    Tittlecase : ${Tittlecase}`)
}
else{
    alert('Please fill up your name!')
}
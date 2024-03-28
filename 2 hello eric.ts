let personName : string = ''

personName = prompt ("WHAT IS YOUR NAME?") || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Would you like to learn some python today?`)
}
else{
    alert("Please fill up your Name!!!")
}
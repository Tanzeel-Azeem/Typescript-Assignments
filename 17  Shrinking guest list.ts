let personName :string[]= ['ali','ibad','aqil','faisal']

// for(let i=0; i<personName.length; i++){
//     console.log('Dear Mr. ' + personName[i] + '\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_guest:string = 'aqil'
let new_guest:string = 'Sohail'

personName[2] = new_guest

// for(let i=0; i<personName.length; i++){
//     console.log('Dear Mr. ' + personName[i] + '\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

//  console.log(`Mr.${absent_guest} is not joining the party`)



console.log('Good news! We have find a big table so we are inviting 3 more members to the party')


personName.unshift('AmanUllah')
personName.splice(4, 0, 'Ayesha')
personName.push('Yousuf')


// for(let i=0; i<personName.length; i++){
//     console.log('Dear Mr. ' + personName[i] + '\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

console.log('Bad News! we couldnt arrange the big tables,Now only two people will be invited in the party!')

// for removing guests
while(personName.length >2){

let romove_guest = personName.pop()
console.log(`\nMr ${romove_guest}, you are not invited to the party!\n`)
}


for(let i=0; i<personName.length; i++){
    console.log('\nDear Mr. ' + personName[i] + '\nIt is our pleasure to invite you in our party.\nThank you!\n\n')
}
personName.splice(0,2)
console.log(personName)
let personName :string[]= ['ali','ibad','aqil','faisal']

// for(let i=0; i<personName.length; i++){
//     console.log('Dear Mr. ' + personName[i] + '\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_guest:string = 'aqil'
let new_guest:string = 'Sohail'

personName[2] = new_guest

for(let i=0; i<personName.length; i++){
    console.log('Dear Mr. ' + personName[i] + '\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr.${absent_guest} is not joining the party`)
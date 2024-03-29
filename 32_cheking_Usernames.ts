let current_users:string[]= ['taHA','aMAn','AyAn', 'TANZeel'];
let new_users:string[]= ['ali','ibad','TANZeel','khan','AyAn'];

new_users.forEach(newusername =>{
    let lowercase:string = newusername.toLocaleLowerCase()
    if (current_users.map(c_user => c_user.toLocaleLowerCase()).includes(lowercase)){
        console.log(`the username ${newusername} is not available. Please write a different username`)
    }else{
        console.log(`the username ${newusername} is available. `);
    }
})
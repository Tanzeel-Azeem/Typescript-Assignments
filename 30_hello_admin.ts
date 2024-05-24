const userNames: string[] = ['Admin', 'ali', 'ibad', 'khan', 'Qalandar', 'Ayan'];

userNames.forEach(userName =>  {
    if (userName === 'Admin')
    {
    console.log(`Hello ${userName}! would you like to see status report?`)
}
else{
    console.log(`Hello ${userName}! Thank you for loggin in again `)
}
})
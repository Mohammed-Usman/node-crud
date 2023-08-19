const userLogin = () => {
    console.log("Enter user_name and password")
    let user_name = prompt("Enter username: ")
    let password = prompt("Enter password: ")

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Performing User Authentication");
            if (user_name == 'Usman' && password == '123'){
                resolve("User Authenticated")
            }else{
                reject("Authentication Failed!")
            }
        }, 1000)
    })
}

function goToHomePage(userAuthStatus){
    return Promise.resolve("Go To Homepage as "+userAuthStatus)
}


// userLogin().then(valid=>{
//     console.log("Validated User");
//     return goToHomePage(valid)
// }
// ).then(userAuthStatus => console.log(userAuthStatus)
// ).catch(err => console.log(err)
// ).finally(()=>console.log("Finishings Up!"))

(async ()=>{
    try{
        const response = await userLogin();
        console.log("Validated User")
        const userAuthStatus = await goToHomePage(response)
        console.log(userAuthStatus)
    } catch(err){
        console.log(err)
    }
    
})();
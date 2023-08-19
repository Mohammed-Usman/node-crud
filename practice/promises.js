// Example 1 

// const promise = new Promise((resolve, reject)=>{

//     console.log("Async task exec")

//     if (false){
//         const person = {name: "Usman"}
//         resolve(person);
//     }else{
//         const error = {errCode:"1001"}
//         // reject(error)
//         throw error
//         // throw reject(error)
//     }
// })

// promise.then((val)=>{console.log(val)}).catch((err)=>{console.log("Failed", err)}).finally(()=>{console.log("clean up")})

// ---------------------------------------------------------------------------------------------------------------------------------------
//Examle 2

// let p = Promise.resolve('resolved')
// console.log(1)
// p.then(val => console.log(2, val))
// console.log(3)

// ---------------------------------------------------------------------------------------------------------------------------------------

//Examle 3

function asyncTask(){
    return Promise.resolve("resolved");
}
console.log(1)
asyncTask().then(val => console.log(2,name))
const name = "Usman"
console.log(3)

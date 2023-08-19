// const error = new Error("Soneting went wrong!") 

// console.log(error.message)

// throw new Error("I am error object")


const { resolve } = require("path");
const {CustomError} = require("./CustomError");
const { reject } = require("lodash");

// throw new CustomError("This is a custom error")

// try{
//     doSomething()
// }
// catch(e){
//     console.log("Error occured")
//     console.log(e)
// }   


function doSomething(){

    const data = fetch("localhost:3000/api");
    
    // console.log("I am from doSomething")
    return "I am from doSomething"
}
 

// process.on("uncaughtException", ()=>{
//     console.log("There was an uncaughtException")
//     process.exit(1)
// })

// doSomething();


// const promise = new Promise((resolve, reject)=>{
//     if (true){
//         resolve(doSomething())
//     } else{
//     reject(doSomething())
//     }
// })

// promise.then((val) =>{
//     console.log(val)
// }).catch((err)=>{
//     console.log("Error Occured")
//     console.log(err)
// })



const someFunction = async ()=>{
    try{
        await doSomething();
    }catch(err){
        throw new CustomError(err.message)
    }

}

someFunction()
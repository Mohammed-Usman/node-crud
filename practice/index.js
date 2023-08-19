// require("dotenv").config()

// console.log(process.env.NAME)
// console.log(process.env.PROFESSION)
// console.log(process.env.COURSE)

// const _ = require("lodash")
// const arr = [1,2,3,4,5]
// console.log(_.chunk(arr))
// console.log(_.last(arr))


// const {data} = require("./car")
// console.log(data)

const {ford, tesla} = require("./car")
console.log(ford, tesla)

console.log(JSON.stringify(ford, null, 2))
console.log(JSON.stringify(tesla, undefined, 2))
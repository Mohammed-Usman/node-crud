// //Example 1

// const p =  Promise.resolve('done 1')

// p.then(val=>{
//     console.log(val);
//     // throw 'err'
//     return 'done2'
//     }
//     ).then(
//         val =>{console.log(val)}
//     ).then(
//         val =>{console.log('asd1', val)}
//     ).then(
//         val =>{console.log('asd2', val);throw "err"}
//     ).then(
//         val =>{console.log('asd3', val)}
//     ).catch(
//         err => {console.log(err)}
//     )

// ----------------------------------------------------------------------------------------------------------------------

// Example 2

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("api executen in: " + time);
    }, time);
  });
};

// makeApiCall(1000).then(val=>{console.log(val)})
console.log("Promise All");
console.time("all");
var multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.all(multiApiCall).then((val) => {
  console.log(val);
});

console.timeEnd("all");

console.log("Promise Race");

console.time("all");
var multiApiCal = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.race(multiApiCall).then((val) => {
  console.log(val);
});

console.timeEnd("all");

console.log("Promise All Setteled");

console.time("all");
var multiApiCal = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.allSettled(multiApiCall).then((val) => {
  console.log(val);
});

console.timeEnd("all");

// console.log("Task Start")

// function asyncTask (cb){
//     console.log("Task Runnning")
//     // cb();
//     setTimeout(cb,0)
// }

// asyncTask(()=>console.log(name));
// console.log("Task End")
// const name = "Usman"

function asyncTask(cb) {
  // setTimeout(() => {
  //      cb()

  // }, 0
  // )
  cb(null, 1);
}

// asyncTask((err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log('data', data)
// })

function makeApiCall(cb) {
  setTimeout(() => {
    console.log("This is async task exec");
  }, 0);
}

makeApiCall(() => {
  makeApiCall(() => {
    makeApiCall(() => {
      // call back hell
    });
  });
});

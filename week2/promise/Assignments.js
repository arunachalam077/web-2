// function wait(n) {
//     let p = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, n * 1000);
//     });
//     return p;
// }

//sleep 
// function sleep(n) {
//     return new Promise(resolve => {
//         setTimeout(resolve, n); // use setTimeout to resolve the promise after n milliseconds
//     });
// }

// function busy(n) {
//     const startTime = Date.now();
//     // Keep the thread busy by looping until the desired time has passed
//     while (Date.now() - startTime < n) {
//         // No operation, just a busy-wait loop
//     }
//     console.log("Busy-wait completed after", n, "milliseconds");
// }

// sleep(1000).then(() => busy(1000)); // Sleep for 1 second, then busy-wait for 1 second


/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
// function wait1(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000); // Convert seconds to milliseconds
//     });
//   }
  
//   function wait2(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000);
//     });
//   }
  
//   function wait3(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000);
//     });
//   }
  
//   async function calculateTime(t1, t2, t3) {
//     const startTime = Date.now();
  
//     await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  
//     const totalTime = Date.now() - startTime;
//     return totalTime;
//   }
  
//anagram 



// class Reactangle{
//     constructor(width,height,color){
//         this.width=width;
//         this.height=height;
//         this.color=color;
//     }

// area(){
//     const area=this.width* this.height;
//     return area;
// }
// color(){
//     const clr = `the color is `+ this.color
//     return clr
// }
// }
// // const react= new Reactangle(2,2,)
// // const arr = react.area()
// // console.log(arr);
// const react = new Reactangle(red)
// const arr = react.color()
// console.log(arr);


//circle in class


// class Circle{
//     constructor(r){
        
//         this.r =r;
//     }

//     circle(){
//         const circle = this.r*this.r*Math.PI
//         return circle
//     }
// }
 
// const cir = new Circle(2)
// const cirr = cir.circle()
// console.log(cirr);



//color 

// class Color {
//     constructor(color){
//         this.color=color;
//     }

//     color(){
//         const color=`clr is ${this.color}`
//     }
// }

// const ar = new Color(red)
// const arr = ar.color()
// console.log(arr);

//promise 
// function SimplePromise(ms){
//     return new Promise (resolve => setTimeout(resolve,ms))
// }
// function callback(){
//     console.log("hai da after 5's");   
// }
// SimplePromise(5000).then(callback)

//calback hell 
//Callback Hell refers to a situation in asynchronous programming where multiple nested callbacks make the code difficult to read, understand, and maintain. This typically happens when each asynchronous operation depends on the result of the previous one, leading to deeply nested callback functions.Callback Hell refers to a situation in asynchronous programming where multiple nested callbacks make the code difficult to read, understand, and maintain. This typically happens when each asynchronous operation depends on the result of the previous one, leading to deeply nested callback functions.
// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//       console.log("hello");
  
//       setTimeout(function () {
//         console.log("hello there");
//       }, 5000);
//     }, 3000);
//   }, 1000);
  

//
// function step3Done() {
//     console.log("hello there");
//   }
  
//   function step2Done() {
//     console.log("hello");
//     setTimeout(step3Done, 5000);
//   }
  
//   function step1Done() {
//     console.log("hi");
//     setTimeout(step2Done, 3000);
//   }
  
//   setTimeout(step1Done, 1000);
  
// promise clean syntax
// function Promisefn(ms){
//     return new Promise( resolve=>setTimeout(resolve,ms))
// }
// Promisefn(1000).then(function(){
//     console.log("Hi");
//     Promisefn(3000).then(function(){
//         console.log("hi 3s");
//         Promisefn(5000).then(function(){
//             console.log("hi 5s ");
            
//         })
        
//     })
    
// })


// async await fn

// function newPromise(ms){
//     return new Promise (resolve=> setTimeout(resolve,ms))
// }
// async function solve() {
//     await newPromise(1000)
//     console.log("hi 1s");
//     await newPromise(3000)
//     console.log("hi 3s");
//     await newPromise(5000)
//  console.log("hi 5s");
     
// }
// solve()


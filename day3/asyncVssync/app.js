
// sync
// console.log("first");
// console.log("second");
// console.log("third");

//async ->setTimeOut 
// console.log("first");
// // setTimeout(function(){
// //     console.log("it will after 2sec")
// // },2000)

// console.log("third");

//  console.log("five");
//  setTimeout(function(){
//      console.log("it will after 2sec")
//     },2000)
 
 
//  setTimeout(function(){
//         console.log("it will after 0sec")
//      },0)
// console.log("six");

// setInterval()

// setInterval(function(){
//     console.log("it will run after 2 sec")
// },2000)

let count =0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count ===5){
        clearInterval(intervalID);
        console.log(`task completed`);
    }
},1000)

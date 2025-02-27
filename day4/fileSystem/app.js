let fs = require('fs');
// const { Z_HUFFMAN_ONLY } = require('zlib');


// // perform CRUD Operation

let data ="i am going to home";

//task-1 create a file and write data into it

//way-1
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created sucessfully");
// })

//WAY-2

// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//             if(err) throw err;
//             console.log("file is created sucessfully");
//         });


// //read a file
// let fileread =fs.readFileSync('demo.txt');
// console.log(fileread.toString());

// //update a file

// fs.appendFileSync('demo.txt','\n all the best')

// //delete data
// fs.unlinkSync('demo.txt')

// example
fs.writeFileSync('h1.txt',data,
    (err)=>{
        if (err) throw err;
         console.log("i am happy");
    });

//read a file
let fileread1= fs.readFileSync('h1.txt');
console.log(fileread1.toString());

//update  a file

fs.appendFileSync('h1.txt','\n you are')

delete data
fs.unlinkSync('h1.txt')

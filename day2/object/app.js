//object

// let person={
//     name:'rahul',
//     age:25,
//     favColor:'white',
//     // no:9716529682,
//     // address:'ram nager nipani',
//     // college:'kle BCA college nipani',
// }

// // console.log(person);
// // console.log(person.name);
// // console.log(person.favColor);

// // change properties in object

// //update
// person.name='rahul prajapati';
// // console.log(person);
// //adding new property
// person.gender='male';
// // console.log(person);

// //delete property
// delete person.favColor;
// console.log(person);

// advance Object
let person={
         name:'rahul',
         age:25,
         favColor:'white',
         fun:function (){
            return(`my name is ${this.name} and my age is ${this.age}`);
         },
         newObj:{
            gender:"male",
            address:"urban square hotel",
         }
}
// console.log(person.print());
// console.log(person.fun());
console.log(person.newObj.address);
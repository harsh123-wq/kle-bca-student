
// function Details(){
//     this.name="rahul";
//     this.age=25;
//     this.address="pune"   
    
// }
// let user =new Details();
// console.log(user.name);

// custom constructor 
function Details(naam,umar,isthan){
        this.name=naam;
        this.age=umar;
        this.address=isthan;   
        this.description =function(){
            return (`my name is ${this.name},my age is ${this.age}`)
        }
        
    }
    let user1 =new Details("rahul",25,"pune");
    // let user3=new Details("harsh",18,"bhoj")
    let user2 =new Details("priya",23,"nipani");
    console.log(user1);
    console.log(user1.description());


    // console.log(user3);
    console.log(user2);
    console.log(user2.description());



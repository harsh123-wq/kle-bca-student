const express = require('express');
const app = express();

//middleware
// app.use('/home',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>response from server</h1>');
//     console.log(res);
// })

// get()
app.get('/thakgaaya',(req,res)=>{
    res.send('<h1> response from my route-> thakana mana hai </h1>');
})

app.get('/changes',(req,res)=>{
    res.send("hello jii");
})



app.listen(8000,()=>{
    console.log('server is running at port 8000');
})


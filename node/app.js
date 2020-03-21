const express=require('express');
const app=express();
const cors=require('cors');
const details=require('./routes/details');
app.use(express.json());
app.use(details);
app.listen(3000,()=>{
    console.log('server is running on 3000');
})
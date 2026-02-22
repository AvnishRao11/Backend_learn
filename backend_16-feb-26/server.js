const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("working ");
})

const port=8000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
const express=require('express');

const app=express();
// server ko create krne ka kaam app.js ka hota h , jo ki src folder me hoti h 
app.use(express.json());

const notes=[];

// create notes 
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"note created succssefully"
    })
});

// get notes 
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched sucessfully",
        notes:notes
    })
});

// delete notes 
// '/notes/:index/
app.delete('/notes/:index',(req,res)=>{
    let idx=req.params.index; 
    notes.splice(idx,1);
    res.status(200).json({
        message:"note deleted sucesfully"
    })
})
// patch  request - ek patch ko update krne ke liye use krte h 

app.patch('/notes/:index',(req,res)=>{
    let idx=parseInt(req.params.index);
    let description=req.body.description;
    notes[idx].description=description;

    res.status(200).json({
        message: "updated sucessfully "
    })
})


module.exports=app;
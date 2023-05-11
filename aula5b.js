const express = require('express')
const app=express()
const porta=process.env.PORT

app.get('/',(req,res)=>{
    res.send('vitor fodaaa')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'vitor3D'})
})

app.listen(porta || 3000,()=>{ console.log('RODANDOOOO')})
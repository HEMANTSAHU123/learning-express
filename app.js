import http from 'http';
import express from 'express'
const app=express()


app.use((req,res,next)=>{
    console.log('output from middleware 1')
    next()
})
app.use((req,res,next)=>{
    console.log('output from middleware 2')
    res.send('<h1>Hello world</h1>')
})

app.listen(3001)

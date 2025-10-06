
import express from 'express'
const app=express()

let port=4000

app.use((req,res,next)=>{
    console.log('Authentication middle called')
    next()
})
app.use("/library-2",(req,res,next)=>{
    console.log('books recommondation from library!')
    next();
})

app.use((req,res,next)=>{
    console.log('special access to research paper from professors and seniors')
    next()
})
app.get("/library-2",(req,res,next)=>{
    res.send("<h1>Library two entered</h1>")
})

app.get("/library-3",(req,res,next)=>{
    res.send("<h2>library 3 entered</h2>")
    
})
app.listen(port,()=>{
    console.log('server is running')
})
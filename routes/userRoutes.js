
import express from "express";
const userrouter=express.Router()
userrouter.get('/',(req,res)=>{
    res.send("Fetching all users")
})
userrouter.post('/',(req,res)=>{
    res.send("Fetching all users")
})
userrouter.get('/:id',(req,res)=>{
    const id=req.params.id
    res.send(`Fetching user with ID: ${id}`)
})
export default userrouter
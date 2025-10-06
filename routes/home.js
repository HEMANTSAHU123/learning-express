import express from 'express'
const homeouter=express.Router()

homeouter.get('/',(req,res)=>{
    res.send("Welcome to the Student & Course Portal API!")
})

export default homeouter;
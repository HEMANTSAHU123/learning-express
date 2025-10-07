import express from "express";
const cartrouter=express.Router()
cartrouter.get('/:id',(req,res)=>{
    const userid=req.params.id
    res.send(`Fetching cart for user with ID: ${userid}`)
})
cartrouter.post('/:id',(req,res)=>{
    const userid=req.params.id
    res.send(`Adding product to cart for user with ID:${userid}`)
})

export default cartrouter
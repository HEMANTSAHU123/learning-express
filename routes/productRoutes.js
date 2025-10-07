import express from 'express'

const productrouter=express.Router()
productrouter.get('/',(req,res)=>{
    res.send('Fetching all products')
})
productrouter.post('/',(req,res)=>{
    res.send('adding new product')
})
productrouter.get('/:id',(req,res)=>{
    const id=req.params.id
    res.send(` Fetching product with ID:${id}`)
})
export default productrouter
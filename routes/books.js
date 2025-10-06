import express from 'express'
const router=express.Router()

router.get('/',(req,res)=>{
res.send('Here is the list of books!')
})
router.post('/',()=>{
    res.send('Book has been added!')
})
export default router
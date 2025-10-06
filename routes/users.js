import express from 'express';
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('user list')
})
router.post('/',()=>{
    res.send('user created')
})
export default router
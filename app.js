import router1 from './routes/order.js'
import router from './routes/users.js'
import express from 'express'
const app=express()
app.use('/order',router1)
app.use('/user',router)
let port=4000
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});


import express from 'express'
const app=express()

let port=4000

app.use(express.json());

app.get('/order',(req,res)=>{
    res.send('here is the list of orders')
})
app.post("sorder/",(req,res)=>{
res.send('A new order has been created')
})

app.get('/users',(req,res)=>{
    res.send('here is the list of all users')
})

app.post('/users',()=>{
    res.send("A new user has been added.")
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

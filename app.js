
import express from 'express'
const app=express()

let port=4000

app.use(express.json());
app.get('/home',(req,res)=>{
    res.send('hello world')
})

// app.get('/contact/1',(req,res)=>{
//     res.send('hello from contact page for user 1')
// })
// app.get('/contact/2',(req,res)=>{
//     res.send('hello from contact page for user 2')

// })
// app.get('/contact/3',(req,res)=>{
//     res.send('hello from contact page fro user 3')
// })
app.get("/contact/:userid",(req,res)=>{
    const id=req.params.userid;
    const name=req.query.name
    const age=req.query.age
    res.send(`hello from contact page for user  ${id} -${name}-${age}`)
})


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

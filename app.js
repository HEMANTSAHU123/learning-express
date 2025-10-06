
import express from 'express'
const app=express()

let port=4000

app.use(express.json());
app.get('/products',(req,res)=>{
    res.send("Here is the list of all products.")
})
app.post("/products",(req,res)=>{
    res.send("A new product has been added")
})
app.get('/categories',(req,res)=>{
    res.send("here is the list of all categories")
})
app.post('/categories',(req,res)=>{
    res.send("A new category has been created")
})

app.use((req,res,next)=>{
    res.status(404).send(`<h1>404-page not found</h1>`)
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

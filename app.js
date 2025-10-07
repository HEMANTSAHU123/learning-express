import express from "express"
import userrouter from "./routes/userRoutes";
import productrouter from "./routes/productRoutes";
import cartrouter from "./routes/cartRoutes";
const app=express();
app.use('/user',userrouter)
app.use('/product',productrouter)
app.use('/cart',cartrouter)
app.use((req,res,next)=>{
    res.status(404).send('module not found')
})

let port=4001
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});

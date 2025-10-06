import express from "express"
import router from "./routes/books.js"
const app=express()
app.use('/books',router)
let port=4000
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});

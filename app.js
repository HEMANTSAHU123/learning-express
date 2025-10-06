import express from "express"
import homeouter from "./routes/home.js";
import courserouter from "./routes/course.js";
import studentrouter from "./routes/student.js";
const app=express();
app.use('/home',homeouter)
app.use('/course',courserouter)
app.use('/student',studentrouter)
app.use((req,res,next)=>{
    res.status(404).send('module not found')
})

let port=4001
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});

import express from "express"
const studentrouter=express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];
studentrouter.get('/',(req,res)=>{
   const student=students.map(s=>s.name)
   res.send(`sudent is ${student}`)
})
 studentrouter.get('/:id',(req,res)=>{
    const studentid=parseInt(req.params.id)
    const student=students.find(s=>s.id===studentid)
    if(student){
        res.send(`student:${student.name}`)
    }
    else{
        res.status(404).send('module not found')
    }
 })

export default studentrouter;
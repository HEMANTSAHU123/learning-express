import express from "express"
const courserouter=express.Router()

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];
courserouter.get('/',(req,res)=>{
const coursename=courses.map(s=>s.name).join(' ')
res.send(`courses are ${coursename}`)
})
courserouter.get('/:id',(req,res)=>{
    const courseid=parseInt(req.params.id)
    const course=courses.find(c=>c.id===courseid)
    if(course){
        res.send(`course are ${course.name}-${course.description}`)
    }
    else{
        res.status(404).send('module not found')
    }
})

export default courserouter;

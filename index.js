const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
app.get('/',(req,res) =>{
    res.send('hellow sohanur rahman sohan this is ok for me')
})
 const users = [
     {id:2,name:'oman',email:'sm93@gmail.com'},
     {id:1,name:'noman',email:'sm37@gmail.com'},
     {id:3,name:'noan',email:'sm83@gmail.com'},
     {id:4,name:'noma',email:'sm39@gmail.com'},
     {id:5,name:'man',email:'sm30@gmail.com'},
     {id:6,name:'nomn',email:'sm-3@gmail.com'}
 ]
app.get('/user',(req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
   
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u=>u.id === id);
    res.send(user);
   
   

})
app.post('/user',(req,res)=>{
    const user = req.body;
    user.id - users.length + 1;
    users.push(user);
    res.send(user);
    console.log(req.body)
    

    
    
})
app.listen(port,() =>{
    console.log(`example listening on port ${port}`)
})

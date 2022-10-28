const { prototype } = require('events');
const express= require('express');
const app= express();
const bodyparser= require('body-parser');
const myObj= require('./users')
const port= process.env.PORT || 5000;

app.use(bodyparser.urlencoded({
    extended:true
}))

console.log(myObj);
// console.log(myObj.users.some((ele)=>ele.id==1));
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    let myJson=[];
    if(myObj.users.some((ele)=>ele.id === parseInt(req.params.id))){
        myJson=myObj.users.filter((ele)=>ele.id === parseInt(req.params.id));
    }
    res.json(myJson);
})

app.get('/user',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/users',(req,res)=>{
    console.clear();
    console.log(req.body);
    res.send(`Done: User ${req.body.user} Id ${req.body.id}`);
})

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`);
})

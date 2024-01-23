const connection =require('./connection');
const express= require('express');
const bodyparser= require('body-parser');
var app=express();
app.use(bodyparser.json);


app.get('./students', (req,res)=>
{
    connection.query('SELECT * FROM student', (err, rows)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(rows);
            res.send(rows)
        }
    })
})

app.get('/students/:id',(req ,res)=>{
    connection.query('SELECT * FROM student WHERE id=?',[req.params.id],(err,rows)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
 
            res.send(rows);
        }   
    } )
})

app.delete('/students/:id',(req ,res)=>{
    connection.query('DELETE * FROM student WHERE id=?',[req.params.id],(err,rows)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
 
            res.send(rows);
        }   
    } )
})

app.post('/students',(req ,res)=>{
    var std =req.body
    var stdData =[std.age,std,name,std,email]
    connection.query('INSERT INTO  student(age, name,email) values(?)',[stdData],(err,rows)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)
        }

    }); 
})

app.patch('/students',(req ,res)=>{
    var std =req.body
    connection.query('UPDATE  student SET? WHERE id='+std.id[std],(err, rows)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)
        }

    }); 
})


app.put('/students',(req ,res)=>{
    var std =req.body
    var empData =[std.age,std,name,std,email]
    connection.query('UPDATE student SET ?  WHERE id='+std.id[std],(err,rows)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
           if(rows.affectedRows==0)
           {
    var stdData =[std.age,std,name,std,email]
    connection.query('INSERT INTO  student(age, name,email) values(?)',[stdData],(err,rows)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows)
        }

    }); 

           }
        }

    }); 
})



app.listen(4000,()=>console.log('Express connected to 3000 server '))
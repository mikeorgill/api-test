const express = require('express');
const app = express(); //app is a backend application

app.get("/",(req,res)=>{
    res.send("Welcome to my Mike's backend application");
});//forward slash means the context root of the application, or the url without

app.get("/mike",(req,res)=>{
    res.send("Hello Mike!");
});

app.listen(3000,()=>{
    console.log("Listening");
});
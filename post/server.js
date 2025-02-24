const express = require("express");
const app = express();



app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"./register.html");
})
app.post("/adduser",(req,res)=>{
  let (username,useremail,userpassword) = req.body;
})







app.listen(3298,()=>{
    console.log("server is running on port  http://localhost:3298");
})
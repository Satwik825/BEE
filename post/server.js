const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))


app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"./register.html");
})
app.post("/adduser",(req,res)=>{
  let (username,useremail,userpassword) = req.body;
  console.log(username,useremail,userpassword)
  let newUser={
    name:username,
    email:useremail,
    password:userpassword
  }
  userData.push(newUser);
  req.send(userData)
})







app.listen(3298,()=>{
    console.log("server is running on port  http://localhost:3298");
})


//note - by default the datatype of content type is url-encoded. we have a function called express.urlencoded (middleware) which passes the url encoded data through it
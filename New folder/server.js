const express = require("express");
const app=express();
const mongoose = require('mongoose');
const User=require("./models/user");

app.post("/users",async(req,res)=>{
    let {name,email,password}=req.body;
    let user=new User({
      name:name,
      email:email,
      password:password
    });
    await newUser.save()//.save se data save hota hai
    res.send("User created");

  })
// read all user
app.get("/users",async(req,res)=>{
  let allusers=await User.fnd();
  res.send(allusers);
})
// read single user
app.get("/users/:id",async(req,res)=>{
  let id=req.params.id;
  let oneUser=await User.findById(id);
  res.send(oneUser);
})
app.length("/under/:id",async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(id);
    res.send(user);
}
)  
// delete user
app.delete("/users/:id",async(req,res)=>{
  let id=req.params.id;
  await User.findByIdAndDelete(id);
  res.send("User deleted");

})
//route to update user
app.put("/users/:id",async(req,res)=>{  
  let {id} = req.params;
  let {name,email,password}=req.body;
  let updatedUser=await User.findByIdAndUpdate(id);
//   {
//     name:name,
//     email:email,
//     password:password
//   }    
updatedUser.name=name;
updatedUser.email=email;
updatedUser.password=password;
await updatedUser.save();
res.send("User updated")

})


mongoose.connect('mongodb://127.0.0.1:27017/g14mdb')
  .then(() => console.log('Connected!'));
app.listen(2222,()=>{
    console.log("server");
})


// make for blogs. update one blog and delete one blog.

const express = require("express");
const app= express();
const mongoose = require('mongoose');
// const User = require ("./model/user");
// const Blog = require("./model/blog");
const userRouts= require("./routes/userRoutes");
const blogRouts= require("./routes/blogRoutes");

app.use(express.json());
app.use("/users",userRouts);
app.use("/blogs",blogRouts);




mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4444,(req,res)=>{
    console.log("server started")
})
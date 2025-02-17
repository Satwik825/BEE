const express = require("express");
const app = express();
// app.get("/profile", (req, res) => {
//     const {username} = req.query;
//     //find in db
//     res.send("profile page of" + " "+username)
// })
// app.get("/profile", (req, res) => {
//     const {username,age,address} = req.query;
//     //find in db
//     res.send("profile page of" + " "+username+ " "+age + " "+address)
// })

let userData=[
    {
        id:1,
        name:"Nitesh",
        address:"Delhi"
    },
    {
        id:2,
        name:"Ritik",
        address:"Faridabad"
    },
    {
        id:3,
        name:"Shreyans",
        address:"Yamuna Vihar"
    }
]

app.get("/allusers", (req, res) => {
     res.send(userData)
})


app.get("/getuserbyId", (req, res) => {
    let {id} = req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
         return res.send(userData[i])
        }
    }
    res.send("User not found")
})

app.get("/deleteuserbyId",(req,res)=>{ // you can also user "/deleteuserbyId/:id" and use req.params.id
    let {id} = req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            userData.splice(i,1)
         return res.send("user deleted")
        }
    }
    res.send("User not found")
})

app.get("/adduser",(req,res)=>{
    let {id,name,address} = req.query;
    userData.push({id:id,name:name,address:address})
    res.send(userData)
})


app.listen(3791, () => {
    console.log("Server started- http://localhost:3791")
})
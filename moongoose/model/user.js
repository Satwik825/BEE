const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }
}
)
module.exports=mongoose.model("user", userSchema)

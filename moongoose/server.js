const express = require("express");
const app =express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/g14mdb')
  .then(() => console.log('Connected!'));

app.listen(4357, () => {
    console.log("Server is running on port 4357");
})
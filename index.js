const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


mongoose.set("strictQuery" , true);
mongoose.connect("mongodb+srv://ayaan:ayaan08@cluster0.m0ohiow.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to db"));
db.on("error",()=>console.log("error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/studentRoute", studentRoute);

app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})
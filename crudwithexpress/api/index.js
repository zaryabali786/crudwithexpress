const express = require('express');
const  bodyParser =require('body-parser');
const cors = require('cors');
const {mongoose} =require('./db.js');
var emplyeeController =require("./controllers/employeeController.js");
var app =  express();
app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyParser.json());
app.listen( 3000,()=>console.log("server started port :3000"));
app.use("/employees",emplyeeController);
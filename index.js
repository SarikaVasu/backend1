
const mongoose = require("mongoose");
const express = require('express');
const studentRoute = require("./controller/studentRoute");
const cors = require('cors');
const bodyParser = require('body-parser');

//MongoDB Atla connection
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://sarikav2003:12345@cluster0.vgvxhmn.mongodb.net/Schooldb"); //connnection string from atlas
var db = mongoose.connection;
db.on("open", () => console.log("connected to db"));
db.on("error", () => console.log("error connecting to db"));

//Creating a app
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/students", studentRoute); //students

//Listening to a port number
app.listen(4000,() => {
    console.log("Server started at 4000");
})

// npm install cors
// npm install body-parser













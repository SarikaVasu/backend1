const express = require("express");
const mongoose = require("mongoose");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();

studentRoute.post("/create-student",(req,res) => {
    studentSchema.create(req.body,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);

    })
})
studentRoute.get("/",(req,res) => {
    studentSchema.find((err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

//id is string datatype in reeq,.params.id
//so convert string to object id type using mongoose
studentRoute.route("/update-student/:id")
.get((req,res) => {
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res) => {
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

//need to delete specific request, id is id of a doc created eehen crating a doc in mongodb
//params is used to collect detail in url
studentRoute.delete("/delete-student/:id",(req,res) => {
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = studentRoute;

//To execute a call back function, the url and request type (get, post,...) must match
//htpp://localhost:4000/students/  -> GET
//http://localhost:4000/students/create-student  -> POST

//Axios.post(url,obj)  -> in frontend
//obj is available in request body
//request will have, request line, request header and request body
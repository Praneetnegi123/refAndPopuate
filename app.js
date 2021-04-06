const mongoose = require('mongoose');
const express=require("express")
const app=express()
mongoose.connect('mongodb://localhost/populate', {useNewUrlParser: true, useUnifiedTopology: true});
const user=require("./models/User")
const address=require("./models/Address")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/addUser",async(req,res)=>{
    console.log("========",req.body)
    const data=user(req.body)
    await data.save()
    res.send("Addded to the database")
})


app.get("/addAddress",async(req,res)=>{
    const data=address(req.body)
    await data.save()
    res.send("Addded to the database")
})


app.get("/allUser",async(req,res)=>{
    const users=await user.find({}).populate('address').populate('allAddress');
    res.json(users)
})


app.listen(8080,()=>{
    console.log("listening at port 8080")
    
})


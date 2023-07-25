 const mongoose=require('mongoose');

 mongoose.connect('mongodb://localhost:27017/database',{
    userCreateIndex: true,
    userNewUrlParser: true,
    useUnifiedTopology: true
 }).then(()=>{
    console.log("connected")
 }).catch((e)=>{
    console.log("no connection");
 })
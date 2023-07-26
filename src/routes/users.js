const express=require("express");
const User = require("../model/users");

const userRoute=express.Router();

userRoute.post("/users", async(req, res)=>{
   try{
       const newUser=new User(req.body)
       console.log(req.body)
       const insertingUser=await newUser.save();
       res.send(insertingUser);
     }catch(e){
    res.send(e);
     }
})

userRoute.get("/users", async(req, res)=>{
   try{   
       const getUser=await User.find({});
       res.status(201).send(getUser);
     }catch(e){
    res.status(400).send(e);
     }
})

userRoute.delete("/users/:id", async(req, res)=>{
   try{
      const getUsertodelete=await User.findByIdAndDelete(req.params.id);
      res.send(getUsertodelete);
   }catch(e){
     res.status(500).send(e);
   }
})

userRoute.patch("/user/:id", async(req, res)=>{
   try{
     const _id=req.params.id;
     const updateUser=await User.findByIdAndUpdate(_id, req.body, {
       new: true
     });
     res.send(updateUser);
 
   }catch(e){
     res.status(400).send(updateUser);
   }
 })
module.exports=userRoute;
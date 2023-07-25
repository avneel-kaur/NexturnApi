const express=require("express");
const userRoute=express.Router();

userRoute.get("/temp", async(req, res)=>{
   res.send("hello");
})

module.exports=userRoute;
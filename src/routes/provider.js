const express=require("express");

const Provider = require("../model/provider");
const providerRoute=express.Router();

providerRoute.get("/provider", async(req, res)=>{
    try{
        
        const getprovider=await Provider.find({});
        res.status(201).send(getprovider);
      }catch(e){
     res.status(400).send(e);
      }
})

providerRoute.post("/provider", async(req, res)=>{
    try{
        const newProvider=new Provider(req.body)
        console.log(req.body)
        const insertingProvider=await newProvider.save();
        res.send(insertingProvider);
      }catch(e){
     res.send(e);
      }
})

providerRoute.delete("/provider/:id", async(req, res)=>{
    try{
       const getProvidertodelete=await Provider.findByIdAndDelete(req.params.id);
       res.send(getProvidertodelete);
    }catch(e){
      res.status(500).send(e);
    }
 })
 
 providerRoute.patch("/provider/:id", async(req, res)=>{
  try{
    const _id=req.params.id;
    const updateProvider=await Provider.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.send(updateProvider);

  }catch(e){
    res.status(400).send(updateProvider);
  }
})


module.exports=providerRoute;
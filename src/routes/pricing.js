const express=require('express');
const Pricing = require('../model/pricing');
const pricingRoute=express.Router();

pricingRoute.get("/pricing", async(req, res)=>{
    try{
        
        const getpricing=await Pricing.find({});
        res.status(201).send(getpricing);
      }catch(e){
     res.status(400).send(e);
      }
})

pricingRoute.post("/pricing", async(req, res)=>{
    try{
        const newPricing=new Pricing(req.body)
        console.log(req.body)
        const insertingPricing=await newPricing.save();
        res.send(insertingPricing);
      }catch(e){
     res.send(e);
      }
})

pricingRoute.delete("/pricing/:id", async(req, res)=>{
    try{
       const getpricetodelete=await Pricing.findByIdAndDelete(req.params.id);
       res.send(getpricetodelete);
    }catch(e){
      res.status(500).send(e);
    }
  })

  pricingRoute.patch("/pricing/:id", async(req, res)=>{
    try{
      const _id=req.params.id;
      const updatePrice=await Pricing.findByIdAndUpdate(_id, req.body, {
        new: true
      });
      res.send(updatePrice);
  
    }catch(e){
      res.status(400).send(updatePrice);
    }
  })

module.exports=pricingRoute;

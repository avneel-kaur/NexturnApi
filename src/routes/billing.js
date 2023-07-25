const express=require("express");
const Billing = require("../model/billing");
const billingRoute=express.Router();

billingRoute.get("/billing", async(req, res)=>{
    try{
        
        const getbilling=await Billing.find({});
        res.status(201).send(getbilling);
      }catch(e){
     res.status(400).send(e);
      }
})

billingRoute.post("/billing", async(req, res)=>{
    try{
        const newBilling=new Billing(req.body)
        console.log(req.body)
        const insertingBilling=await newBilling.save();
        res.send(insertingBilling);
      }catch(e){
     res.send(e);
      }
})
module.exports=billingRoute;
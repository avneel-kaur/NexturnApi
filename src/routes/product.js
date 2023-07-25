const express=require("express");
const Product = require("../model/product");
const productRoute=express.Router();

productRoute.get("/product", async(req, res)=>{
    try{
        
        const getproduct=await Product.find({});
        res.status(201).send(getproduct);
      }catch(e){
     res.status(400).send(e);
      }
})

productRoute.post("/product", async(req, res)=>{
    try{
        const newProduct=new Product(req.body)
        console.log(req.body)
        const insertingProduct=await newProduct.save();
        res.send(insertingProduct);
      }catch(e){
     res.send(e);
      }
})
module.exports=productRoute;
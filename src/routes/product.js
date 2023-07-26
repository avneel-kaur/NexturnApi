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

productRoute.delete("/product/:id", async(req, res)=>{
  try{
     const getProducttodelete=await Product.findByIdAndDelete(req.params.id);
     res.send(getProducttodelete);
  }catch(e){
    res.status(500).send(e);
  }
})

productRoute.patch("/product/:id", async(req, res)=>{
  try{
    const _id=req.params.id;
    const updateProduct=await Product.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.send(updateProduct);

  }catch(e){
    res.status(400).send(updateProduct);
  }
})
module.exports=productRoute;
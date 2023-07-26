const express=require("express");

const mongoose=require("mongoose");
const db=require('./db/conn');
 
const userRoute=require("./routes/users");
const billingRoute = require("./routes/billing");
const productRoute = require("./routes/product");
const providerRoute = require("./routes/provider");
const pricingRoute = require("./routes/pricing");

// mongoose.connect('mongodb://localhost:27017/new-database', {  useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });

const app=express();

const port=process.env.PORT || 3000;    
app.use(express.json());

app.use("/v1", userRoute);
app.use("/v1", billingRoute);
app.use("/v1", productRoute);
app.use("/v1", providerRoute);
app.use("/v1", pricingRoute);


// app.patch("/users/:id", async(req, res)=>{
//     try{
//         const _id=req.params.id;
//         const gettingUser=await User.findByIdAndUpdate(_id, 
           
//         );
//         res.send(gettingUser);
//     }catch(e){
// res.status(500).send(e);
//     }
// })



app.listen(port, ()=>{
    console.log(`connection is live ${port}`);
})
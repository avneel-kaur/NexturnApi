const express=require("express");

const mongoose=require("mongoose");
const User = require('../src/model/users'); 
const userRoute=require('../src/routes/users');
const billingRoute = require("./routes/billing");
const productRoute = require("./routes/product");

mongoose.connect('mongodb://localhost:27017/new-database', {  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const app=express();

const port=process.env.PORT || 3000;    
app.use(express.json());

//app.use("/user", userRoute);
app.use("/v1", billingRoute);
app.use("/v1", productRoute);
app.post("/users", async(req, res)=>{
    try{
        const newUser=new User(req.body)
        console.log(req.body)
        const insertingUser=await newUser.save();
        res.send(insertingUser);
      }catch(e){
     res.send(e);
      }
})

app.get("/users", async(req, res)=>{
    try{
        
        const getUser=await User.find({});
        res.status(201).send(getUser);
      }catch(e){
     res.status(400).send(e);
      }
})

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

app.delete("/users/:id", async(req, res)=>{
    try{
       const getUsertodelete=await User.findByIdAndDelete(req.params.id);
       res.send(getUsertodelete);
    }catch(e){
      res.status(500).send(e);
    }
})

app.listen(port, ()=>{
    console.log(`connection is live ${port}`);
})